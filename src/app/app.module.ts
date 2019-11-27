import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookShelfComponent } from './book-shelf/book-shelf.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './popup/book-details/book-details.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    BookShelfComponent,
    BookComponent,
    BookDetailsComponent,
    WishlistComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatIconModule
  ],
  exports: [
    BookShelfComponent,
    
  ],
  entryComponents: [
    BookShelfComponent,
    BookDetailsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
