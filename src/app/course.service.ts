import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  
  courses: object[];
  
  constructor() { 
    this.courses = [
      {id: 1, name: 'Course1'},
      {id: 2, name: 'Course2'},
      {id: 3, name: 'Course3'}
    ]
  }
}
