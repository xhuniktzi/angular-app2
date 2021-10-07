import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  showNotifySource: Subject<string> = new Subject<string>();

  getNotification(): Observable<string> {
    return this.showNotifySource.asObservable();
  }

  show(msg: string): void {
    this.notify(msg);
  }

  private notify(msg: string): void {
    this.showNotifySource.next(msg);
  }
}
