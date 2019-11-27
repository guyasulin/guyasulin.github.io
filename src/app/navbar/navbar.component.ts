import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() userName:string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.snapshot.paramMap.get("userName");
    this.userName = this.route.snapshot.paramMap.get("userName");
  }
}
