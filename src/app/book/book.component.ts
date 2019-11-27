import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../model/bookModel';
import { BookDetailsComponent } from '../popup/book-details/book-details.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book:BookModel;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialogBook() {
    const dialogRef = this.dialog.open(BookDetailsComponent, {
      width: '400px',
      data: this.book,
      panelClass: 'epsSelectorPanel'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
  }

