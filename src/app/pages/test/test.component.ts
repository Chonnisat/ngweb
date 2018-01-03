import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class TestComponent implements OnInit {

  xTitle = 'Title';

  @Output() titleChange = new EventEmitter();

  @Input()
  get title() {
    return this.xTitle;
  }

  set title(value) {
    this.xTitle = value;
    this.titleChange.emit(this.xTitle);
  }
  @Input()
  code = '0000';



  isClick = false;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // activatedRoute.params.subscribe{(param) => {
    //   console.log('');
    // }};
  }
  items = [1, 2, 3, 4];
  conditionExpression = 'A';
  case1Exp = 'A';
  price = 12345.6778;
  currentDate = new Date();

  ngOnInit() {}

  greeting() {
    this.xTitle = 'Greet from button';
  }

  onClick() {
    this.isClick = !this.isClick;
    this.items.push(this.items.length);
  }

  onHomeClick() {
    this.router.navigate(['home']);
  }
}
