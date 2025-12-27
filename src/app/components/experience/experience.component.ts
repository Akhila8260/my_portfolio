import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [slideInAnimation]
})
export class ExperienceComponent {

  // For scroll animation
  state: 'hidden' | 'visible' = 'hidden';

  activeIndex: number | null = 0; 

  experiences = [
    {
      role: 'Java Developer Intern',
      company: 'QSpiders - Software Testing Training Institute',
      duration: 'Jan 2025 – Jul 2025',
      location: 'Bhubaneswar, Odisha',
      details: [
        'Worked on Banking Onboarding Module using Spring Boot.',
        'Developed REST APIs and integrated backend services.',
        'Collaborated with team for testing and debugging.',
        'Used MySQL for data persistence and API validation.'
      ]
    },
    {
      role: 'Intern',
      company: 'CodeAlpha',
      duration: 'Oct 2024 – Jan 2025',
      location: 'Remote',
      details: [
        'Built small Java and web-based applications.',
        'Improved problem-solving and coding skills.',
        'Worked with mentors on real-world tasks.'
      ]
    },
    {
      role: 'Intern',
      company: 'InternPe',
      duration: 'Oct 2024 – Nov 2024',
      location: 'Bhubaneswar, Odisha',
      details: [
        'Developed basic projects using Java and frontend tools.',
        'Gained exposure to SDLC and teamwork.',
        'Enhanced debugging and documentation skills.'
      ]
    }
  ];
onScroll: ((state: "hidden" | "visible") => void) | undefined;

  toggle(i: number) {
    this.activeIndex = this.activeIndex === i ? null : i;
  }
}
