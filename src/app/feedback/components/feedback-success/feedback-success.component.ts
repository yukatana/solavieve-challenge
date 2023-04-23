import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-feedback-success',
  templateUrl: './feedback-success.component.html',
  styleUrls: ['./feedback-success.component.css']
})
export class FeedbackSuccessComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<FeedbackSuccessComponent>,
  ) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
