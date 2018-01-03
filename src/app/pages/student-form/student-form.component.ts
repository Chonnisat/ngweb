import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Student } from '../../shared/model/student';
import { StudentService } from '../../shared/service/student/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [StudentService]
})
export class StudentFormComponent implements OnInit {

  student: Student;
  mode= 'ADD';
  constructor(
    private studentService: StudentService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.activeRouter.params.subscribe((param) => {
      this.student = new Student();
      if (param.id === '0') {
        this.student = new Student();
      }else {
        this.mode = 'UPDATE';
        this.studentService.readStudent(param.id).subscribe((resp) => {
          this.student = resp[0];
        });
      }
    });
  }

  ngOnInit() {
  }

  onSaveBtnClick() {
    this.studentService.onAdd(this.student).subscribe((resp) => {
      Materialize.toast('Save Successfully', 4000);
      this.goToStudentPage();
    });
  }

  onUpdateBtnClick() {
    this.studentService.onUpdate(this.student).subscribe((resp) => {
      Materialize.toast('Update Successfully', 4000);
      this.goToStudentPage();
    });
  }

  onBackBtnClick() {
    this.goToStudentPage();
  }

  goToStudentPage() {
    this.router.navigate(['admin', 'student']);
  }

}
