import { Component, OnInit } from '@angular/core';
import { NotifyService } from './shared/notify.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  menuIsActive: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggleMenu(): void {
    this.menuIsActive = !this.menuIsActive;
  }
}
