import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifyComponent } from './success-notify/success-notify.component';
import { ClientPickerComponent } from './client-picker/client-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SuccessNotifyComponent, ClientPickerComponent],
  exports: [SuccessNotifyComponent, ClientPickerComponent],
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
