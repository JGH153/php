import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCComponent } from './content-c.component';

describe('ContentCComponent', () => {
  let component: ContentCComponent;
  let fixture: ComponentFixture<ContentCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
