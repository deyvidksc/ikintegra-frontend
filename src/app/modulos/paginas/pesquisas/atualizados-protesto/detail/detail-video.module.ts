import { Routes } from "@angular/router";
import { DetailVideoComponent } from "./detail-video.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { DataViewModule } from "primeng/dataview";
import { NgModule } from '@angular/core';
import { InputTextModule } from "primeng/inputtext";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from "primeng/button";

const routes: Routes = [
  { path: 'detail-video', component: DetailVideoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    InputTextModule,
    ToolbarModule,
    ButtonModule
  ],
  declarations: [DetailVideoComponent],
})
export class DetailVideoModule { }
