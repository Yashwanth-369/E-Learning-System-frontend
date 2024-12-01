import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // State for toggling form and profile view
  isEditing: boolean = true;

  // Profile Data
  profileData = {
    fullName: '',
    address: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    nationality: '',
    marks: null,
    remark: '',
    course: '',
    profileImage: null as string | null
  };

  // Handle file upload for profile image
  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.profileData.profileImage = reader.result as string;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  // Handle form submission
  onSubmit(profileForm: any): void {
    if (profileForm.valid) {
      this.isEditing = false; // Switch to display mode after submission
    }
  }

  // Enable editing
  editProfile(): void {
    this.isEditing = true;
  }
}
