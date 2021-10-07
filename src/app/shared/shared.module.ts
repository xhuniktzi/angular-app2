import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessNotifyComponent } from './success-notify/success-notify.component';

@NgModule({
  declarations: [SuccessNotifyComponent],
  exports: [SuccessNotifyComponent],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
