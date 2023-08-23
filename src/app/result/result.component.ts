import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

  constructor(private router: Router) { }

  submitQuestionnaire() {
    // Handle submission logic here
    // You can access user selections from the QuestionComponent
    this.router.navigate(['/']);
  }
}
