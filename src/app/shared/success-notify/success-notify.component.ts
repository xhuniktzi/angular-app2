import { Component, OnInit } from '@angular/core';
import { INotify } from 'src/app/common/notifiy';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-success-notify',
  templateUrl: './success-notify.component.html',
  styleUrls: ['./success-notify.component.css'],
})
export class SuccessNotifyComponent implements OnInit {
  value: string[] = [];
  visible: boolean = false;
  class: string = '';

  constructor(private notifyService: NotifyService) {}

  hide(): void {
    this.visible = false;
  }

  ngOnInit(): void {
    this.notifyService.getNotification().subscribe((notify: INotify) => {
      this.value = [];
      if (notify.type == 'success') {
        this.class = 'is-success';
        this.value.push(notify.msg);
        this.visible = true;
      } else if (notify.type == 'error') {
        this.class = 'is-danger';
        this.value.push(notify.msg);
        this.visible = true;
      }
    });
  }
}
