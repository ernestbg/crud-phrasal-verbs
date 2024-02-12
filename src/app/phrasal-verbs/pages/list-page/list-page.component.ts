import { Component, OnInit } from '@angular/core';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {
  public phrasalVerbs: PhrasalVerb[] = [];
  constructor(private PhasalVerbsService: PhrasalVerbsService) { }

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

}
