import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackSuccessComponent } from './components/feedback-success/feedback-success.component';
import { NgBootstrapModule } from '../shared/ng-bootstrap/ng-bootstrap.module';
import { SharedFormsModule } from '../shared/forms/shared-forms.module';



@NgModule({
  declarations: [
    FeedbackFormComponent,
    FeedbackSuccessComponent
  ],
  exports: [
    FeedbackFormComponent
  ],
  imports: [
    CommonModule,
    NgBootstrapModule,
    SharedFormsModule
  ]
})
export class FeedbackModule { }
