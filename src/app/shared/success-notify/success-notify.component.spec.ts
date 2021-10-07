import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessNotifyComponent } from './success-notify.component';

describe('SuccessNotifyComponent', () => {
  let component: SuccessNotifyComponent;
  let fixture: ComponentFixture<SuccessNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessNotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
