import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { INotify } from '../common/notifiy';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  showNotifySource: Subject<INotify> = new Subject<INotify>();

  getNotification(): Observable<INotify> {
    return this.showNotifySource.asObservable();
  }

  show(msg: INotify): void {
    this.notify(msg);
  }

  private notify(msg: INotify): void {
    this.showNotifySource.next(msg);
  }
}
