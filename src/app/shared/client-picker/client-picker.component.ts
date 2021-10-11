import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IClient } from 'src/app/common/client';
import { ClientsApiService } from 'src/app/data/clients-api.service';

@Component({
  selector: 'app-client-picker',
  templateUrl: './client-picker.component.html',
  styleUrls: ['./client-picker.component.css'],
})
export class ClientPickerComponent implements OnInit {
  name: string = '';
  nit: string = '';

  results: IClient[] = [];

  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() currentClient: EventEmitter<IClient | undefined> = new EventEmitter<
    IClient | undefined
  >();

  constructor(private clientApiService: ClientsApiService) {}

  ngOnInit(): void {}

  close(): void {
    this.visible = false;
    this.visibleChange.emit(false);
  }
  search(): void {
    this.clientApiService
      .findClientByNameAndNit(this.name, this.nit)
      .subscribe({
        next: (results) => (this.results = results),
      });
  }

  select(client: IClient) {
    this.currentClient.emit(client);
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
