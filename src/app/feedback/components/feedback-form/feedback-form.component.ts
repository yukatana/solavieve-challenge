import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackSuccessComponent } from '../feedback-success/feedback-success.component';

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
    ) {
    // customizing ngb rating value for 5 stars
    config.max = 5;

    const controls: any = {
      overallRating: new FormControl<number | null>(null),
      paymentRating: new FormControl<number | null>(null),
      customerServiceRating: new FormControl<number | null>(null),
      comment: new FormControl(null)
    };
    this.feedbackForm = new FormGroup(controls);
  }

  ngOnInit(): void {
  }

  postFeedback() {
    const feedback = this.feedbackForm.value;
    this.dialog.open(FeedbackSuccessComponent);
  }

}
