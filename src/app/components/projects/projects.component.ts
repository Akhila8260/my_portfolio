import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideInAnimation]
})
export class ProjectsComponent {

  // For scroll animation
  state: 'hidden' | 'visible' = 'hidden';

  selected: any = null;

  projects = [
    {
      title: 'Attendance Management System',
      desc: 'Developed a web-based system to manage student attendance with admin, teacher, and student roles, featuring secure login, leave management, real-time reports, and MySQL database integration using Java and JSP.',
      tech: 'Java, JSP, Servlets, Oracle',
      github: 'https://github.com/Akhila8260/Attendance_management_system'
    },
    {
      title: 'Polling Application',
      desc: 'Built a full-stack polling app allowing users to create polls, vote, and view live results using Angular and Spring Boot, with REST APIs, authentication, and real-time updates stored in MySQL.',
      tech: 'Angular, Spring Boot, MySQL',
      github: 'https://github.com/Akhila8260/PollingApp'
    },
    {
      title: 'Banking Onboarding API',
      desc: 'Designed a secure backend API for customer onboarding with OTP verification and payment integration using Spring Boot, JPA, and MySQL, focusing on data validation, security, and scalable microservices.',
      tech: 'Spring Boot, JPA, MySQL',
      github: 'https://github.com/Akhila8260/Banking_Onboarding_module'
    },
    {
      title: 'Developers Hub',
      desc: 'Developed a full-stack portfolio project with secure login and signup using Angular frontend, Spring Boot backend, Spring Security for authentication, and MySQL for user management with RESTful APIs.',
      tech: 'Spring Boot, JPA, MySQL, Angular',
      github: 'https://github.com/Akhila8260/Developer_Hub'
    },
    {
      title: 'Student Management System',
      desc: 'Built a full-stack application to manage student records, courses, and results using Java, Spring Boot, REST APIs, and MySQL, enabling CRUD operations with a clean and responsive user interface.',
      tech: 'Spring Boot, JPA, MySQL, Thymeleaf',
      github: 'https://github.com/Akhila8260/Student-Management-System'
    },
    {
      title: 'Payroll Management System',
      desc: 'Developed a backend system to manage employee payroll, salaries, and deductions using Spring Boot, REST APIs, and MySQL, focusing on secure data handling, business logic, and efficient database operations.',
      tech: 'Spring Boot, JPA, MySQL',
      github: 'https://github.com/Akhila8260/PayRoll_Management_System'
    }
  ];
}
