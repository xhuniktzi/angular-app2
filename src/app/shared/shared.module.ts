import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifyComponent } from './success-notify/success-notify.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';
import { ProductPickerComponent } from './product-picker/product-picker.component';
import { BranchPickerComponent } from './branch-picker/branch-picker.component';

@NgModule({
  declarations: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
    BranchPickerComponent,
  ],
  exports: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
    BranchPickerComponent,
  ],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
