import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way binding

@Component({
  selector: 'app-course-feedback',
  standalone: true,
  imports: [FormsModule,CommonModule],  // Use the FormsModule directly here for form functionalities
  templateUrl: './course-feedback.component.html',
  styleUrls: ['./course-feedback.component.css']
})
export class CourseFeedbackComponent {
  // Feedback form model
  feedback = {
    courseName: '',
    rating: 0,
    comments: ''
  };

  feedbackSubmitted = false;

  // Method to handle form submission
  submitFeedback() {
    if (this.feedback.rating && this.feedback.comments) {
      console.log('Feedback submitted:', this.feedback);
      this.feedbackSubmitted = true;
    } else {
      alert('Please fill in all fields.');
    }
  }
}
