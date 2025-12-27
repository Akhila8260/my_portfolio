import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [slideInAnimation]
})
export class HeroComponent implements OnInit {

  state: 'hidden' | 'visible' = 'hidden';

  titles: string[] = [
    'Software Developer',
    'Full Stack Java Developer'
  ];

  currentTitle = this.titles[0];
  index = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.titles.length;
      this.currentTitle = this.titles[this.index];
    }, 5000);
  }
}
