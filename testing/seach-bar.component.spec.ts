import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachBarComponent } from './seach-bar.component';

describe('SeachBarComponent', () => {
  let component: SeachBarComponent;
  let fixture: ComponentFixture<SeachBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeachBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
