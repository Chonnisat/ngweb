import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {


  homeTitle = 'from home title';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  goTestPage() {
    this.router.navigate(['testparam', '1']);
  }
}
