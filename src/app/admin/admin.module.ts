import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule
  ]
})
export class AdminModule { }
