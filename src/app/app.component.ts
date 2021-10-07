import { Component, OnInit } from '@angular/core';
import { NotifyService } from './shared/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuIsActive: boolean = false;
  msgs: string[] = [];
  notifyIsVisible: boolean = false;
  notifySubs: any;

  constructor(private notifyService: NotifyService) {}

  ngOnInit(): void {
    this.notifySubs = this.notifyService
      .getNotification()
      .subscribe((notify: string) => {
        this.notifyIsVisible = true;
        this.msgs = [];
        this.msgs.push(notify);
      });
  }
  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }
}
