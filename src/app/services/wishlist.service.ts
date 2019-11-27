import { Injectable } from '@angular/core';
import { BookModel } from '../model/bookModel';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  private wishlist:BookModel[] = []

  constructor() { }

  getWishlist() {
    return this.wishlist
  }

  addWishlist(book: BookModel) {
   if (this.isBookExist(book) == false) {
    this.wishlist.push(book)
   }
  }

  deleteWishlist(book: BookModel) {
    for (let i = 0; i < this.wishlist.length;i++) {
      const element = this.wishlist[i];
      if (element.id == book.id) {
        this.wishlist = this.wishlist.splice(i, 1)
        break;
      }
    }
  }

  isBookExist(book: BookModel){
    return this.wishlist.some(x => {
      if (x.id == book.id) {
        return true;
      } else {
         return false;
      }
    });
  }
}
