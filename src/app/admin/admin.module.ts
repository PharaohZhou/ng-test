import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from "./admin-routing.module";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";




@NgModule({
  declarations: [
    AdminComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class AdminModule { }
