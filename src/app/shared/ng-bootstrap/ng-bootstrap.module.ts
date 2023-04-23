import { NgModule } from '@angular/core';
import { NgbModule, NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  providers: [
    NgbRatingConfig,
  ],
  imports: [
    NgbModule,
    NgbRatingModule,
  ],
  exports: [
    NgbModule,
    NgbRatingModule,
  ]
})
export class NgBootstrapModule { }
