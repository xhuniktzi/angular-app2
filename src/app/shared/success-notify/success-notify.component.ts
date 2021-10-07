import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-success-notify',
  templateUrl: './success-notify.component.html',
  styleUrls: ['./success-notify.component.css'],
})
export class SuccessNotifyComponent implements OnInit {
  @Input() value: string[] = [];
  @Input() visible: boolean = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor() {}

  hide(): void {
    this.visible = false;
  }

  ngOnInit(): void {}
}
