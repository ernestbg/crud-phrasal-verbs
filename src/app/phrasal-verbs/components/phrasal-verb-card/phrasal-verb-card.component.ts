import { Component, Input, OnInit } from '@angular/core';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';

@Component({
  selector: 'phrasal-verb-card',
  templateUrl: './phrasal-verb-card.component.html',
  styles: [
  ]
})
export class PhrasalVerbCardComponent implements OnInit {
 

  @Input() 
  public phrasalVerb!: PhrasalVerb;

  ngOnInit(): void {
    if(!this.phrasalVerb) throw Error('phrasaVerb property is required')
  }

}
