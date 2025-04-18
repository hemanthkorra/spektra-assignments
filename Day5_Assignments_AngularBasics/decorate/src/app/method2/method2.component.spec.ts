import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Method2Component } from './method2.component';

describe('Method2Component', () => {
  let component: Method2Component;
  let fixture: ComponentFixture<Method2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Method2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Method2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
