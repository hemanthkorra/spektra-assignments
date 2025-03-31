import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method3Component } from './method3.component';

describe('Method3Component', () => {
  let component: Method3Component;
  let fixture: ComponentFixture<Method3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Method3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Method3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
