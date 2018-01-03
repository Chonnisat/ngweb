import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StudentService } from '../../shared/service/student/student.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [StudentService]

})
export class StudentComponent implements OnInit {

  students: Observable<any>;
  studentList= [];
  criteria = {
    studentName : '',
    limit : 10,
    offset : 0
  };
  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
    // $('.modal').modal();
    this.onSearchData();
  }

  onSearchData() {
    // this.studentService.onSearchData(this.criteria).subscribe(resp => {
    //   this.studentList = resp.items;
    // });
    this.students = this.studentService.onSearchData(this.criteria);

  }

  onDelete(id) {
    this.studentService.onDelete(id).subscribe(resp => {
      // $('#modal1').modal('open');
      this.onSearchData();
    });
  }

  pagination(url) {
    this.students = this.studentService.pagination(url);
  }

  onAddBtnClick() {
    this.router.navigate(['admin', 'student-form', '0']);
  }

  onEditBtnClick(id) {
    this.router.navigate(['admin', 'student-form', id]);
  }

}
