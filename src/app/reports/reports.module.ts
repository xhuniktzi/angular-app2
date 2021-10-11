import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryReportComponent } from './query-report/query-report.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QueryReportComponent],
  imports: [CommonModule, FormsModule],
  bootstrap: [QueryReportComponent],
})
export class ReportsModule {}
