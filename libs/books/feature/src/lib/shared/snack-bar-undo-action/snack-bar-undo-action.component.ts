import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { removeFromReadingList, addToReadingList } from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';

@Component({
  selector: 'tmo-snack-bar-undo-action',
  templateUrl: './snack-bar-undo-action.component.html',
  styleUrls: ['./snack-bar-undo-action.component.scss']
})
export class SnackBarUndoActionComponent implements OnInit {

  constructor(
    private readonly store: Store,
    public snackBarRef: MatSnackBarRef<SnackBarUndoActionComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

  undoAction(item) {
    if(this.data.action === 'Add'){
      const book = {...item, bookId: item.id};
      this.store.dispatch(removeFromReadingList({ item: book }));
    }
    else if(this.data.action === 'Remove') {
      this.store.dispatch(addToReadingList({book: item}));
    }
  }
  
}
