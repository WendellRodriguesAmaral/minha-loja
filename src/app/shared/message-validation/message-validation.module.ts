import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageValidationComponent } from './message-validation.component';



@NgModule({
  declarations: [MessageValidationComponent],
  imports: [
    CommonModule
  ],
  exports: [MessageValidationComponent]
})
export class MessageValidationModule { }
