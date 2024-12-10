import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  sendOtp(arg0: { email: any; }) {
    throw new Error('Method not implemented.');
  }
  api_url: string = 'http://localhost:8080';
  token=signal('user')
  constructor(private http: HttpClient) { }

  private courseSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public course$: Observable<any> = this.courseSubject.asObservable();

  updateSelectedCourse(data: any) {
    this.courseSubject.next(data);
  }

  login(userDetails: LoginDetails) {
    const url = this.api_url + '/api/users/login';
    return this.http.post(url, userDetails)
  }

  register(registerDetails: RegisterDetails) {
    const url = this.api_url + '/api/users/register';
    // const headers = new HttpHeaders({
    //   Authorization: `Bearer ${this.token()}`,
    // });
    return this.http.post(url, registerDetails);
  }

  verifyOtp(data:{email:string,otp:string}){
    let url = this.api_url+'/api/users/verify-otp';
    url += `?email=${data.email}&otp=${data.otp}`;
    return this.http.post(url,'');
  }
  forgotPassword(data:{email:string}){
    let url = this.api_url+'/api/users/reset-password-request';
    return this.http.post(url,data);
  }

  enrolled(id:number,email:string){
    let url = this.api_url+`/api/courses/${id}/enroll?email=${email}`;
    return this.http.post(url,'');
  }
  
  submitFeedback(userEmail: string, feedback: any){
    const url=`${this.api_url}/api/feedback/${userEmail}`;
    return this.http.post(url, feedback);
  }

  getCourses(){
    const url = this.api_url+'/api/courses'
    return this.http.get(url);
  }
}
export interface LoginDetails {
  email: string;
  password: string;
  //role: string;
}

export interface RegisterDetails {
  email: string;
  fullName: string;
  password: string;
  date: string;
  address: string;
  course: string;
  phone: number;
  role: string;
}
