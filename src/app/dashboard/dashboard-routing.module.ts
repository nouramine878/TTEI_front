import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  {path:"", component : DashboardComponent , children :[
    {path:"", component : ProductdetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
