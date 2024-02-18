import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PhrasalVerbsRoutingModule } from './phrasal-verbs-routing.module';
import { MaterialModule } from '../material/material.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';



@NgModule({
  declarations: [
    NewPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
    ListPageComponent,
    DetailsPageComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    PhrasalVerbsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PhrasalVerbsModule { }
