import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../services/wishlist.service';
import { BookModel } from '../model/bookModel';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  public wishlist:BookModel[];
  public userName: string;

  constructor(private wishlistService:WishlistService) { }

  ngOnInit() {
    this.wishlist = this.wishlistService.getWishlist();
  }
}
