import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifyComponent } from './success-notify/success-notify.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';
import { ProductPickerComponent } from './product-picker/product-picker.component';
import { BranchPickerComponent } from './branch-picker/branch-picker.component';
import { SumPipe } from './sum.pipe';

@NgModule({
  declarations: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
    BranchPickerComponent,
    SumPipe,
  ],
  exports: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
    BranchPickerComponent,
    SumPipe,
  ],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
