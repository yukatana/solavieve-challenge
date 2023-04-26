import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackSuccessComponent } from '../feedback-success/feedback-success.component';
import { FeedbackSubmission } from '../../../models/feedbackSubmission';
import { FirestoreService } from '../../../firebase/services/firestore.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(
    private config: NgbRatingConfig,
    private dialog: MatDialog,
    private firestore: FirestoreService,
    ) {
    // customizing ngb rating value for 5 stars
    config.max = 5;

    const controls: any = {
      overallRating: new FormControl<number>(0),
      paymentRating: new FormControl<number>(0),
      customerServiceRating: new FormControl<number>(0),
      comment: new FormControl<string | null>(null)
    };
    this.feedbackForm = new FormGroup(controls);
  }

  ngOnInit(): void {
  }

  postFeedback() {
    const feedback: FeedbackSubmission = this.feedbackForm.value;
    this.firestore.addDocumentToCollection('feedback', feedback)
      .then(res => this.dialog.open(FeedbackSuccessComponent))
      .catch(err => alert(`ERROR CODE: ${err?.code}. There was an error posting your feedback. Please, try again later.`));
  }

}
