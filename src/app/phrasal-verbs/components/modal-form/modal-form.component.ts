import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  inputData: any;
  closeMessage = 'close';
  editMode: boolean = false; // Variable para distinguir entre modo de edición y modo de creación

  modalForm = this.formBuilder.group({
    headword: this.formBuilder.control(''),
    level: this.formBuilder.control(''),
    sublevel: this.formBuilder.control(''),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<ModalFormComponent>,
    private formBuilder: FormBuilder,
    private phrasalVerbsService: PhrasalVerbsService
  ) { }

  ngOnInit(): void {
    this.inputData = this.data;
    if (this.inputData.id) {
      this.editMode = true; // Establecer el modo de edición si hay un ID
      this.setModalData(this.inputData.id);
    }
  }

  savePhrasalVerb(editMode: boolean) {
    if (editMode) {
      this.updatePhrasalVerb();
    } else {
      this.addPhrasalVerb();
    }
    this.modalForm.reset();
  }

  addPhrasalVerb() {
    this.phrasalVerbsService.savePhrasalVerb(this.modalForm);
  }

  updatePhrasalVerb() {
    return this.phrasalVerbsService.updatePhrasalVerb(this.inputData.id, this.modalForm.value);
  }

  setModalData(id: string) {
    this.phrasalVerbsService.getPhrasalVerbById(id)
      .subscribe(phrasalVerb => {
        this.modalForm.setValue({
          headword: phrasalVerb.headword,
          level: phrasalVerb.level,
          sublevel: phrasalVerb.sublevel
        });
      });
  }

  closeModalForm() {
    this.matDialogRef.close('closing');
  }
}
