import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspaperIconComponent } from './newspaper-icon.component';

describe('NewspaperIconComponent', () => {
  let component: NewspaperIconComponent;
  let fixture: ComponentFixture<NewspaperIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewspaperIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspaperIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
