import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifyComponent } from './success-notify/success-notify.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';
import { ProductPickerComponent } from './product-picker/product-picker.component';

@NgModule({
  declarations: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
  ],
  exports: [
    SuccessNotifyComponent,
    ClientPickerComponent,
    ProductPickerComponent,
  ],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
