import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { SnackBarUndoActionComponent } from '../shared/snack-bar-undo-action/snack-bar-undo-action.component';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  configSuccess: MatSnackBarConfig = {
    panelClass: 'style-success',
    duration: 7000,
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  };

  constructor(private readonly store: Store,
    private snackBar: MatSnackBar
    ) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.snackBar.openFromComponent(SnackBarUndoActionComponent, {
      data: {item: item, action:'Remove', message:'Book removed from reading list'},
      ...this.configSuccess
    })
  }
}
