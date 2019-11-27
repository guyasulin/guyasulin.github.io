import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchChach:string;

  constructor(private http:HttpClient) { }

  getBooks(params:string, pageNumber:number = 1):Observable<any> {
    if(params == null) {
      params = this.searchChach
    } else {
      this.searchChach = params;
    }
   return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${params}&maxResults=20&startIndex=${(pageNumber - 1)*20}`)
  }

}
