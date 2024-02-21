import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { PhrasalVerbsRoutingModule } from './phrasal-verbs-routing.module';
import { MaterialModule } from '../material/material.module';
import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    DetailsPageComponent,
    ModalFormComponent
  ],
  imports: [
    CommonModule,
    PhrasalVerbsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PhrasalVerbsModule { }
