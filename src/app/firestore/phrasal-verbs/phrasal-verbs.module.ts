import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPageComponent } from './pages/list-page/list-page.component';

import { DetailsPageComponent } from './pages/details-page/details-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalFormComponent } from './components/modal-form/modal-form.component';
import { FormsModule } from '@angular/forms';
import { LayoutRoutingModule } from 'src/app/shared/layout-page/layout.routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ListPageComponent,
    DetailsPageComponent,
    ModalFormComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class PhrasalVerbsModule { }
