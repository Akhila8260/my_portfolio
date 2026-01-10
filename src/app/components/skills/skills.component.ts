import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [slideInAnimation]
})
export class SkillsComponent implements AfterViewInit {

  state: 'hidden' | 'visible' = 'hidden';

  @ViewChild('skillsTrack') skillsTrack!: ElementRef<HTMLDivElement>;

  activeIndex = 0;

  skills = [
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Angular', icon: 'devicon-angularjs-plain colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
    { name: 'Spring Boot', icon: 'devicon-spring-plain colored' },
    { name: 'Hibernate', icon: 'devicon-hibernate-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Oracle', icon: 'devicon-oracle-plain colored' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'Maven', icon: 'devicon-maven-plain colored' },
    { name: 'NPM', icon: 'devicon-npm-original-wordmark colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'VS Code', icon: 'devicon-vscode-plain colored' },
    { name: 'IntelliJ', icon: 'devicon-intellij-plain colored' },
    { name: 'Eclipse', icon: 'devicon-eclipse-plain colored' },
    { name: 'Apache', icon: 'devicon-apache-plain colored' },
    { name: 'STS', icon: 'fa-solid fa-leaf' },
    { name: 'AI / ML', icon: 'fa-solid fa-brain' },
    { name: 'Pandas', icon: 'devicon-pandas-original colored' },
    { name: 'NumPy', icon: 'devicon-numpy-original colored' }
  ];

  /* Default → center middle skill */
  ngAfterViewInit() {
    this.activeIndex = Math.floor(this.skills.length / 2);
    this.scrollToIndex(this.activeIndex, false);
  }

  /* Detect center on scroll */
  onScroll() {
    const track = this.skillsTrack.nativeElement;
    const center = track.scrollLeft + track.offsetWidth / 2;
    const items = Array.from(track.children) as HTMLElement[];

    let closest = 0;
    let min = Infinity;

    items.forEach((el, i) => {
      const elCenter = el.offsetLeft + el.offsetWidth / 2;
      const dist = Math.abs(center - elCenter);
      if (dist < min) {
        min = dist;
        closest = i;
      }
    });

    this.activeIndex = closest;
  }

  /* Arrow navigation (ONE BY ONE) */
  scrollLeft() {
    if (this.activeIndex > 0) {
      this.scrollToIndex(this.activeIndex - 1);
    }
  }

  scrollRight() {
    if (this.activeIndex < this.skills.length - 1) {
      this.scrollToIndex(this.activeIndex + 1);
    }
  }

  /* Click on skill → center + zoom */
  selectSkill(index: number) {
    this.scrollToIndex(index);
  }

  /* Core scroll logic */
  private scrollToIndex(index: number, smooth = true) {
    const items = this.skillsTrack.nativeElement.children;
    const target = items[index] as HTMLElement;

    if (target) {
      target.scrollIntoView({
        behavior: smooth ? 'smooth' : 'auto',
        inline: 'center',
        block: 'nearest'
      });
      this.activeIndex = index;
    }
  }
}
