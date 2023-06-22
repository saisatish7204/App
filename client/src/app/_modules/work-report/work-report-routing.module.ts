import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkReportComponent } from './work-report.component';

const routes: Routes = [
  {
      path: '', component: WorkReportComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkReportRoutingModule { }
