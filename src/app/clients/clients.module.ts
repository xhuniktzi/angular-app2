import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ClientListComponent],
  imports: [CommonModule, RouterModule],
  bootstrap: [ClientListComponent],
})
export class ClientsModule {}
