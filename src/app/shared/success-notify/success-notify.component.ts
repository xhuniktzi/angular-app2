import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../notify.service';

@Component({
  selector: 'app-success-notify',
  templateUrl: './success-notify.component.html',
  styleUrls: ['./success-notify.component.css'],
})
export class SuccessNotifyComponent implements OnInit {
  value: string[] = [];
  visible: boolean = false;

  constructor(private notifyService: NotifyService) {}

  hide(): void {
    this.visible = false;
  }

  ngOnInit(): void {
    this.notifyService.getNotification().subscribe((notify: string) => {
      this.value = [];
      this.value.push(notify);
      this.visible = true;
    });
  }
}
