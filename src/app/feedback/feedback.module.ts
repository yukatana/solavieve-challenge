import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackFormComponent } from './components/feedback-form/feedback-form.component';
import { FeedbackSuccessComponent } from './components/feedback-success/feedback-success.component';
import { NgBootstrapModule } from '../shared/ng-bootstrap/ng-bootstrap.module';
import { SharedFormsModule } from '../shared/forms/shared-forms.module';
import { FirestoreService } from '../firebase/services/firestore.service';



@NgModule({
  declarations: [
    FeedbackFormComponent,
    FeedbackSuccessComponent
  ],
  providers: [
    FirestoreService
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
