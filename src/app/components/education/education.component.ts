import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  animations: [slideInAnimation]
})
export class EducationComponent {

  // For scroll animation
  state: 'hidden' | 'visible' = 'hidden';

  educationList = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institute: 'Gita Autonomous College, Bhubaneswar',
      duration: '2023 – 2025',
      score: 'CGPA: 8.9 / 10'
    },
    {
      degree: 'B.Sc in Physics',
      institute: 'Utkal University, Bhubaneswar',
      duration: '2020 – 2023',
      score: 'Percentage: 82.60%'
    },
    {
      degree: 'CHSE (Science)',
      institute: 'Kendrapara Residential Higher Secondary School of Science & Technology',
      duration: '2018 – 2020',
      score: ''
    },
    {
      degree: 'Matriculation',
      institute: 'Modern Public School, Thakurhat, Kendrapara',
      duration: '2008 – 2018',
      score: ''
    }
  ];
}
