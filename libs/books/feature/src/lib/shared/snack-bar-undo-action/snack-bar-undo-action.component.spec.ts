import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarUndoActionComponent } from './snack-bar-undo-action.component';

describe('SnackBarUndoActionComponent', () => {
  let component: SnackBarUndoActionComponent;
  let fixture: ComponentFixture<SnackBarUndoActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarUndoActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarUndoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
