import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';
import { NotifyService } from 'src/app/shared/notify.service';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.css'],
})
export class ClientDeleteComponent implements OnInit {
  client: IClient | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clientApiService: ClientsApiService,
    private notifyService: NotifyService
  ) {}

  ngOnInit(): void {
    const id: number = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this.clientApiService.findClientById(id).subscribe({
      next: (client) => (this.client = client),
    });
  }

  onSubmit(): void {
    this.clientApiService.deleteClient(this.client?.client_Id).subscribe({
      next: () => {
        this.notifyService.show({
          type: 'success',
          msg: `cliente "${this.client?.name}" eliminado correctamente`,
        });
        this.router.navigate(['/clients']);
      },
      error: (err) => {
        this.notifyService.show({
          type: 'error',
          msg: `${err}`,
        });
      },
    });
  }
}
