import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackSuccessComponent } from './components/feedback-success/feedback-success.component';



@NgModule({
  declarations: [
    FeedbackFormComponent,
    FeedbackSuccessComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }
