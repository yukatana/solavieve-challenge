import { Component, OnInit } from '@angular/core';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor(config: NgbRatingConfig) {
    // customizing ngb rating value for 5 stars
    config.max = 5;

    const controls: any = {
      overallRating: new FormControl<number | null>(null, [Validators.required]),
      paymentRating: new FormControl<number | null>(null, [Validators.required]),
      customerServiceRating: new FormControl<number | null>(null, [Validators.required]),
      comment: new FormControl(null)
    }
    this.feedbackForm = new FormGroup(controls)
  }

  ngOnInit(): void {
  }

  postFeedback() {
    const feedback = this.feedbackForm.value
    console.log(feedback)
  }

}
