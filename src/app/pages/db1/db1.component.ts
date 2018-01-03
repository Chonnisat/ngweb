import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-db1',
  templateUrl: './db1.component.html',
  styleUrls: ['./db1.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Db1Component implements OnInit {

  items: Observable<any[]>;
  code: string;
  constructor(
    private db: AngularFirestore
  ) {
    this.items = db.collection('items').valueChanges();
   }

  ngOnInit() {
  }

  onAdd() {
    this.db.collection('items').add({
      code : this.code
    });
  }

}
