import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
export class SkillsComponent {

  state: 'hidden' | 'visible' = 'hidden';

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
    { name: 'STS', icon: 'fa-solid fa-leaf' },        // Spring Tool Suite
    { name: 'AI / ML', icon: 'fa-solid fa-brain' },
    { name: 'Pandas', icon: 'devicon-pandas-original colored' },
    { name: 'NumPy', icon: 'devicon-numpy-original colored' }
  ];
}
