import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ForbiddenComponent} from "./forbidden.component";



@NgModule({
  declarations: [ForbiddenComponent],
  exports: [ForbiddenComponent],
  imports: [
    CommonModule
  ]
})
export class ForbiddenModule { }
