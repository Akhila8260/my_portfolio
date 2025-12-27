import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { slideInAnimation } from '../../animations/slide.animations';
import { ScrollAnimateDirective } from '../../directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  animations: [slideInAnimation],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  state: 'hidden' | 'visible' = 'hidden';
}
