import { Component, Input, OnInit } from '@angular/core';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../../components/modal-form/modal-form.component';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public phrasalVerbs: PhrasalVerb[] = [];
  constructor(private PhasalVerbsService: PhrasalVerbsService, private dialog: MatDialog) { }
 
  ngOnInit(): void {
    this.PhasalVerbsService.getAllPhrasalVerbs().subscribe(phrasalVerbs => {
      this.phrasalVerbs = phrasalVerbs.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      console.log('Error while fetching data:' + err);
    })
  }

  openModalForm() {
   var modalForm= this.dialog.open(ModalFormComponent, {
      width: '40%',
      height: '400px',
      enterAnimationDuration:'300ms',
      exitAnimationDuration:'300ms',
      data: {
        title: 'user-edit'
      }
    });  
    modalForm.afterClosed().subscribe(item=>console.log(item))
  }
  
}
