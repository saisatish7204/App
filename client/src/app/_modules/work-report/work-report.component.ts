import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, WorkReportService } from '@app/_services';

@Component({
  selector: 'app-work-report',
  templateUrl: './work-report.component.html'
})
export class WorkReportComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private workReportServie: WorkReportService,
      private alertService: AlertService
  ) { }

  ngOnInit() {
      this.form = this.formBuilder.group({
          empId: ['', Validators.required],
          userName: ['', Validators.required],
          date: ['', Validators.required],
          project: ['', [Validators.required]],
          workReport: ['', [Validators.required]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    console.log(this.form.getRawValue())
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.workReportServie.saveWorkReport(this.form.value)
          .pipe(first())
          .subscribe({

              next: () => {
                  debugger;
                  this.alertService.success('Registration successful', { keepAfterRouteChange: true });
                  this.router.navigate(['../login'], { relativeTo: this.route });
              },
              error: error => {
                  this.alertService.error(error);
                  this.loading = false;
              }
          });
  }


}
