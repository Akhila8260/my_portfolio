import { Component, OnInit, HostListener } from "@angular/core";
import { HeaderComponent } from "./components/header/header.component";
import { HeroComponent } from "./components/hero/hero.component";
import { AboutComponent } from "./components/about/about.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { EducationComponent } from "./components/education/education.component";
import { FooterComponent } from "./components/footer/footer.component";
import { WelcomeModalComponent } from "./shared/welcome-modal/welcome-modal.component";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeModalComponent,
    HeaderComponent,
    HeroComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    EducationComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <!-- 🌟 Welcome Modal -->
    <app-welcome-modal
      *ngIf="showWelcome"
      (close)="closeWelcome()">
    </app-welcome-modal>

    <!-- 🚀 Portfolio Background -->
    <div class="app-container" [class.locked]="showWelcome">
      <app-header></app-header>
      <app-hero></app-hero>
      <app-skills></app-skills>
      <app-projects></app-projects>
      <app-experience></app-experience>
      <app-education></app-education>
      <app-about></app-about>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>

    <!-- ⬆️ Scroll To Home Button -->
    <button
      class="scroll-top"
      *ngIf="showScrollTop"
      (click)="scrollToHome()">
      ⬆️
    </button>
  `
})
export class AppComponent implements OnInit {

  showWelcome = true;
  showScrollTop = false;

  ngOnInit(): void {
    this.showWelcome = true;   // always show on load
    document.body.classList.add('modal-open'); // 🚫 disable scroll
  }

  closeWelcome() {
    this.showWelcome = false;
    document.body.classList.remove('modal-open'); // ✅ enable scroll
  }

  // 👀 Detect scroll to toggle arrow
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    this.showScrollTop = scrollTop > 300; // show after scrolling down
  }

  // ⬆️ Smooth scroll back to Home/Hero
  scrollToHome() {
    const hero = document.getElementById('hero');
    if (hero) {
      hero.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
