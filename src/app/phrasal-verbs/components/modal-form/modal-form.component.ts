import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  inputData: any;
  closeMessage = 'close'

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<ModalFormComponent>,
    private formBuilder: FormBuilder,
    private phrasalVerbsService: PhrasalVerbsService) { }

  ngOnInit(): void {
    this.inputData = this.data;
  }

  modalForm = this.formBuilder.group({
    headword: this.formBuilder.control(''),
    level: this.formBuilder.control(''),
    sublevel: this.formBuilder.control(''),
  })

  savePhrasalVerb() {
      console.log(this.modalForm.value);
      this.phrasalVerbsService.savePhrasalVerb(this.modalForm);
    }

  closeModalForm() {
    this.matDialogRef.close('closing')
  }

}
