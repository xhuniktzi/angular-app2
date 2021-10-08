import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css'],
})
export class ClientDetailComponent implements OnInit {
  client: IClient | undefined;

  constructor(
    private route: ActivatedRoute,
    private clientsApiService: ClientsApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.clientsApiService.findClientById(id).subscribe({
      next: (client) => (this.client = client),
      error: () => {
        this.notifyService.show({
          type: 'error',
          msg: 'El cliente no existe',
        });
      },
    });
  }
}
