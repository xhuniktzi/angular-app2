import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceCreateComponent } from './invoice-create/invoice-create.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SumPipe } from '../shared/sum.pipe';

@NgModule({
  declarations: [InvoiceCreateComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InvoiceModule {}
