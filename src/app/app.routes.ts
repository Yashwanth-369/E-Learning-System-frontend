import { provideRouter, RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CourseComponent } from './pages/course/course.component';
import { CourseFeedbackComponent } from './pages/course-feedback/course-feedback.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { AboutComponent } from './pages/about/about.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { QuizComponent } from './pages/quiz/quiz.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'registration',
        component: RegistrationComponent
    },
    {
        path: 'course-details',
        component: CourseDetailsComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'course',
        component: CourseComponent
    },
    {
        path: 'course-feedback',
        component:CourseFeedbackComponent
    },
    {
        path: 'course-view',
        component:CourseViewComponent
    },
    {
        path: 'about',
        component:AboutComponent
    },
    {
        path: 'admin',
        component:AdminComponent
    },
    {
        path: 'contact',
        component:ContactComponent
    },
    {
        path: 'quiz',
        component:QuizComponent
    },
    { path: 'quiz/:courseTitle', component: QuizComponent }, 
    {
        path: '**',
        redirectTo: 'home'
    }
    
];
export const appRoutingProviders: any[] = [];
export const routing = RouterModule.forRoot(routes);

export default routes;
