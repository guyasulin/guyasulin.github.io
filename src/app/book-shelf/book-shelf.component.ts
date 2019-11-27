import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../model/bookModel';
import { WishlistService } from '../services/wishlist.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-book-shelf',
  templateUrl: './book-shelf.component.html',
  styleUrls: ['./book-shelf.component.scss']
})
export class BookShelfComponent implements OnInit {

  @Input() books:BookModel[];
  @Input() totalItems:number;

  constructor(private searchService:SearchService) { }

  ngOnInit() {
  }

  pageEvent(event) {
    this.searchService.getBooks(null,event.pageIndex)
    .subscribe(res => {
      this.books = res.items
    })
  }

}
