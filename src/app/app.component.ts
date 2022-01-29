import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics = ['Angular', 'React', 'Vue']
  topicHasError = true;
  submitted = false;

  userModel= new User('Rohith', 'rohith@gmail.com', 798173335, 'default', 'morning', true )

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopic(value: string) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error', error)
      
    )
  }
}
