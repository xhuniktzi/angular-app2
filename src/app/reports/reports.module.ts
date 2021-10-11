import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueryReportComponent } from './query-report/query-report.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [QueryReportComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  bootstrap: [QueryReportComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ReportsModule {}
