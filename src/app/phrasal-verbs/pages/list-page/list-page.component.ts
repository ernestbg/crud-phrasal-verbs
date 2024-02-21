import { Component, Input, OnInit } from '@angular/core';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';
import { MatDialog } from '@angular/material/dialog';
import { ModalFormComponent } from '../../components/modal-form/modal-form.component';
import { tap } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public phrasalVerbs: PhrasalVerb[] = [];
  public filteredPhrasalVerbs: PhrasalVerb[] = [];
  public searchTerm: string = '';
  constructor(private phrasalVerbsService: PhrasalVerbsService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.phrasalVerbsService.getAllPhrasalVerbs()
      .pipe(
        tap((phrasalVerbs: any[]) => {
          this.phrasalVerbs = phrasalVerbs.map((e: any) => {
            const data = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
          });
          this.filteredPhrasalVerbs = this.phrasalVerbs;
        })
      )
      .subscribe({
        error: err => {
          console.log('Error while fetching data:' + err);
        }
      });
  }

  search() {
    this.filteredPhrasalVerbs = this.phrasalVerbs.filter(verb =>
      verb.headword.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  openModalForm(title: string, id?: any) {
    var modalForm = this.dialog.open(ModalFormComponent, {
      width: '40%',
      height: '400px',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: title,
        id: id
      }
    });
    modalForm.afterClosed().subscribe(item => console.log(item))
  }

  editPhrasalVerb(id: any) {
    this.openModalForm('Edit', id,);
  }

  addPhrasalVerb() {
    this.openModalForm('Add', '');
  }
}
