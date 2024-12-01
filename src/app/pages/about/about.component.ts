import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],  
  templateUrl: './about.component.html', 
  styleUrls: ['./about.component.css']  
})
export class AboutComponent implements OnInit {

  startCounting(id: string, targetValue: number, duration: number): void {
    const element = document.getElementById(id);
    let startValue = 0;
    const increment = targetValue / (duration / 100); 

    if (element) {
      const interval = setInterval(() => {
        startValue += increment;
        element.textContent = Math.floor(startValue).toString();

        if (startValue >= targetValue) {
          clearInterval(interval);
          element.textContent = targetValue.toString();  
        }
      }, 100);  
    }
  }

  ngOnInit(): void {
   
    this.startCounting("totalDownloads", 15100, 20000); 
    this.startCounting("coursesCompleted", 19256, 20000);  
    this.startCounting("happyCustomers", 12100, 20000);  
    this.startCounting("dailyCustomers", 2560, 20000);  
  }
}
