import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './client-list/client-list.component';
import { RouterModule } from '@angular/router';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientDeleteComponent } from './client-delete/client-delete.component';
import { FormsModule } from '@angular/forms';
import { ClientCreateComponent } from './client-create/client-create.component';
import { ClientEditComponent } from './client-edit/client-edit.component';

@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailComponent,
    ClientDeleteComponent,
    ClientCreateComponent,
    ClientEditComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  bootstrap: [ClientListComponent],
})
export class ClientsModule {}
