import { Component, OnInit, Inject, Input, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef,MatDialog } from '@angular/material/dialog';
import { BookModel } from 'src/app/model/bookModel';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<BookDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public book: BookModel,private wishlistService:WishlistService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  deleteBook() {
    this.wishlistService.deleteWishlist(this.book);
    this.onNoClick()
  }

  saveBook() {
    this.wishlistService.addWishlist(this.book);
    this.onNoClick();
  }
}
