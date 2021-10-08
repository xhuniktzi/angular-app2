import { Component, OnInit } from '@angular/core';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  constructor(
    private clientApiService: ClientsApiService,
    private notifyService: NotifyService
  ) {}

  clients: IClient[] = [];

  ngOnInit(): void {
    this.clientApiService.getClients().subscribe({
      next: (clients) => (this.clients = clients),
      error: () => {
        this.notifyService.show({
          type: 'error',
          msg: 'Error al cargar el listado de clientes',
        });
      },
    });
  }
}
