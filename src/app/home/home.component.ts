import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public userName:string;

  constructor(public router:Router) { }

  ngOnInit() {
  }

  goSearchPage(){
      console.log(this.userName)
      this.router.navigate(['navbar', this.userName])
  }
}
