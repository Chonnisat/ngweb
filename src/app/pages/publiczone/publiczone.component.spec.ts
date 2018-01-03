import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliczoneComponent } from './publiczone.component';

describe('PubliczoneComponent', () => {
  let component: PubliczoneComponent;
  let fixture: ComponentFixture<PubliczoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliczoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliczoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
