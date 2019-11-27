import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { SearchService } from '../services/search.service';
import { BookModel } from '../model/bookModel';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public totalItems: number;
  public userName: string;
  public books: BookModel[];
  public bookName: string;
  

  constructor(private searchService: SearchService,) { }

  ngOnInit() {
  }

  searchBook() {
    setTimeout(() => {
    if (!this.bookName) {
      this.books = []
    } else {
      this.searchService.getBooks(this.bookName)
        .subscribe(res => {
          this.books = res.items;
          this.totalItems = res.totalItems
          console.log(res)
        })
    }
    }, 600)
  }
}
