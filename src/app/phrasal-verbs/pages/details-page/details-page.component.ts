import { Component, OnInit } from '@angular/core';
import { PhrasalVerbsService } from '../../services/phrasal-verbs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { PhrasalVerb } from '../../interfaces/phrasal-verb.interface';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styles: [
  ]
})
export class DetailsPageComponent implements OnInit {
  public phrasalVerb?: PhrasalVerb;
  phrasalVerb$!: Observable<PhrasalVerb>;

  constructor(private phrasalVerbService: PhrasalVerbsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.phrasalVerb$ = this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.phrasalVerbService.getPhrasalVerbById(id))
    );
    this.phrasalVerb$.subscribe({
      next: (phrasalVerb: PhrasalVerb) => {
        if (!phrasalVerb) return this.router.navigate(['/phrasal-verbs/list']);
        this.phrasalVerb = phrasalVerb;
        return;
      },
      error: (error) => {
        console.error('Error al obtener el documento:', error);
      }
    });
  }

  goBack(){
    this.router.navigateByUrl('phrasal-verbs/list');
  }


}



