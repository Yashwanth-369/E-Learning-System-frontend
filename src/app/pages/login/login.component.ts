import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService, LoginDetails } from '../../shared/api.service';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      // role: ['student', Validators.required], // Default value set to 'student'
      email: ['', [Validators.required, Validators.email]], // Email validation
      password: ['', [Validators.required, Validators.minLength(6)]], // Password validation
    });
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
 
  ngOnInit(): void {}
 
  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
      const payload: LoginDetails = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        //role: this.loginForm.value.role
      };
      this.apiService.login(payload).subscribe(
        (response: any) => {
          console.log(response);
          this.apiService.token.set(response.token);
        },
        (err) => {
          console.log('Error occurred while fetching', err);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
 
  onSendPassword(){
    const payload = {
      email: this.forgotPasswordForm.value.email
    }
    this.apiService.forgotPassword(payload).subscribe(
      (response: any) => {
        console.log(response);
        this.apiService.token.set(response.token);
      },
      (err) => {
        console.log('Error occurred while fetching', err);
      }
    );
  }
}