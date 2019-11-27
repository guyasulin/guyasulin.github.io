import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {path:'', component:HomeComponent},   
  {path:'home', component:HomeComponent},   
  {path:'navbar/:userName', component:SearchBarComponent},   
  {path:'searchPage/:userName', component:SearchBarComponent},   
  {path:'wishlist/:userName', component:WishlistComponent},   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
