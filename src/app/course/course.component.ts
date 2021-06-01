import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() courses: any;
  email: any;
  onKeyUp: any;
  onAdd: () => void;
  onRemove: (obj: number) => void;
  i: number = 4;

  constructor(service: CourseService) { 
    this.courses = service.courses;
    this.onKeyUp = function () {
      console.log(this.email);
    };

    this.onAdd = function () {
      this.courses.push({id: this.i, name: 'NewCourse'})
      this.i++
    }

    this.onRemove = function(obj) {
      // this.courses.pop();
      this.courses.splice(this.courses.indexOf(obj), 1)
    }

  }
  

  ngOnInit(): void {
  }

}
