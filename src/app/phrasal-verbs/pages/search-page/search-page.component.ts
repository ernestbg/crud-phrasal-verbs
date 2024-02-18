import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';
import { map } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public phrasalVerbs: PhrasalVerb[] = [];
  public selectedPhrasalVerb?: PhrasalVerb;

  constructor(private phrasalVerbService: PhrasalVerbsService) { }

  searchPhrasalVerbs() {
    const value: string = this.searchInput.value || '';
    this.phrasalVerbService.getSuggestions(value).subscribe(phrasalVerbs => this.phrasalVerbs = phrasalVerbs)
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedPhrasalVerb = undefined;
      return;
    }
    const phrasalVerb: PhrasalVerb = event.option.value;
    this.searchInput.setValue(phrasalVerb.headword);
    this.selectedPhrasalVerb= phrasalVerb;
  }

}
