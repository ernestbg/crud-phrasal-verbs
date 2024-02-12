import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { HeadwordPageComponent } from './pages/headword-page/headword-page.component';
import { PhrasalVerbsRoutingModule } from './phrasal-verbs-routing.module';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    NewPageComponent,
    LayoutPageComponent,
    SearchPageComponent,
    ListPageComponent,
    HeadwordPageComponent
  ],
  imports: [
    CommonModule,
    PhrasalVerbsRoutingModule,
    MaterialModule
  ]
})
export class PhrasalVerbsModule { }
