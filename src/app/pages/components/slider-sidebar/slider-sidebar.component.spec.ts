import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSidebarComponent } from './slider-sidebar.component';

describe('SliderSidebarComponent', () => {
  let component: SliderSidebarComponent;
  let fixture: ComponentFixture<SliderSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SliderSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
