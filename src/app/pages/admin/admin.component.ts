import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-admin',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router) {}
  navigateToCourse() {
    this.router.navigate(['/course']); 
  }
  onNavigate(section: string) {
    alert(`Navigating to ${section}!`);
    
  }
}