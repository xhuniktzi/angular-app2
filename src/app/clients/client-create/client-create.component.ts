import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
})
export class ClientCreateComponent implements OnInit {
  client: IClient = {
    client_Id: undefined,
    name: '',
    nit: '',
    phone_Number: '',
    direction: '',
    e_Mail: '',
  };

  constructor(
    private clientApiService: ClientsApiService,
    private router: Router,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.clientApiService.saveClient(this.client).subscribe({
        next: (data) => {
          this.notifyService.show({
            type: 'success',
            msg: `cliente: "${data.name}" creado correctamente`,
          });
          this.router.navigate(['/clients/detail', data.client_Id]);
        },
        error: (err) => {
          this.notifyService.show({
            type: 'error',
            msg: `${err}`,
          });
        },
      });
    } else {
      this.notifyService.show({
        type: 'error',
        msg: 'Revisa que los campos esten llenados correctamente',
      });
    }
  }
}
