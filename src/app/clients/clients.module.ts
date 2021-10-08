import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailComponent,
    ClientDeleteComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  bootstrap: [ClientListComponent],
})
export class ClientsModule {}
