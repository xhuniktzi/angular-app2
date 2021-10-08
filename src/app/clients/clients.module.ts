import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  declarations: [ClientListComponent, ClientDetailComponent],
  imports: [CommonModule, RouterModule],
  bootstrap: [ClientListComponent],
})
export class ClientsModule {}
