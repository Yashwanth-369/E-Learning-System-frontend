import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-view.component.html',
  styleUrl: './course-view.component.css'
})
export class CourseViewComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedRating: number = 0;
  isFeedbackVisible: boolean = false;
  feedbackOptions: string[] = [
    'Curriculum',
    'Skill & Tools',
    'Instructor',
    'Topic Depth',
    'Quizzes & Assignments',
    'Easy to Follow'
  ];
  selectedOptions: string[] = [];
  course_info: any;
  progress: number[] = [0, 0, 0, 0, 0]; 
  progressColors: string[] = ['#ff0000', '#ff6600', '#ffcc00', '#00cc44', '#4caf50']; 

  constructor(private router: Router, private service: ApiService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.service.course$.subscribe(course_info => {
      this.course_info = course_info;
      console.log(course_info);
    });
  }

  navigateToQuiz(course: any) {
    this.router.navigate(['/quiz', course.title]);
  }
  

  extractVideoId(url: string): string {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  }

  updateProgress(videoIndex: number): void {
    let currentProgress = this.progress[videoIndex];
    const interval = setInterval(() => {
      if (currentProgress < 100) {
        currentProgress += 10; 
        this.progress[videoIndex] = currentProgress;
        if (currentProgress < 25) {
          this.progressColors[videoIndex] = '#ff0000'; 
        } else if (currentProgress < 50) {
          this.progressColors[videoIndex] = '#ff6600'; 
        } else if (currentProgress < 75) {
          this.progressColors[videoIndex] = '#ffcc00'; 
        } else {
          this.progressColors[videoIndex] = '#4caf50'; 
        }
      } else {
        clearInterval(interval); 
      }
    }, 200); 
  }
  downloadResource(pdfPath: string): void {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = pdfPath.split('/').pop() || 'resource.pdf';
    link.click();
  }
  
  selectRating(rating: number): void {
    this.selectedRating = rating;
    this.isFeedbackVisible = true;
  }
  feedbackComment: string ='';

  submitFeedback(userEmail:string):void{
    const feedbackPlayload={
      rating:this.selectedRating,
      option:this.selectedOptions,
      comment:this.feedbackComment
    };

    this.service.submitFeedback(userEmail, feedbackPlayload).subscribe(
      (response:any)=>{
        console.log('Feedback submitting successfully:',response);
        this.closeOverlay();
      },
      (err)=>{
        console.log('error submitting feedback:',err);
      }
    );
  }

  closeOverlay(): void {
    this.isFeedbackVisible = false;
  }

  toggleOption(option: string): void {
    const index = this.selectedOptions.indexOf(option);
    if (index === -1) {
      this.selectedOptions.push(option);
    } else {
      this.selectedOptions.splice(index, 1);
    }
  }
}
