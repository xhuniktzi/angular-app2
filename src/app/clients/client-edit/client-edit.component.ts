import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
})
export class ClientEditComponent implements OnInit {
  client: IClient = {
    client_Id: undefined,
    name: '',
    nit: '',
    phone_Number: '',
    direction: '',
    e_Mail: '',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientsApiService: ClientsApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.clientsApiService.findClientById(id).subscribe({
      next: (client) => (this.client = client),
    });
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.clientsApiService
        .updateClient(this.client.client_Id ?? 0, this.client)
        .subscribe({
          next: () => {
            this.notifyService.show({
              type: 'success',
              msg: `cliente: "${this.client.name}" actualizado correctamente`,
            });
            this.router.navigate(['/clients/detail', this.client.client_Id]);
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
