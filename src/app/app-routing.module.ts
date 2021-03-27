import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ColorListComponent } from './color-list/color-list.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'colors', component: ColorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
