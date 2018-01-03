import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivatezoneComponent } from './privatezone.component';

describe('PrivatezoneComponent', () => {
  let component: PrivatezoneComponent;
  let fixture: ComponentFixture<PrivatezoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivatezoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivatezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
