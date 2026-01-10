import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  // Smooth scroll to section
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // Detect mobile device
  isMobile(): boolean {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }

  // Phone click behavior (UPDATED with highlight logic)
  handleCallClick() {
    if (this.isMobile()) {
      // ✅ EXISTING MOBILE BEHAVIOR (UNCHANGED)
      window.location.href = 'tel:+919348999424';
    } else {
      const contactSection = document.getElementById('contact');
      const contactInfo = document.querySelector('.contact-info');

      if (contactSection) {
        // ✅ EXISTING SCROLL BEHAVIOR (UNCHANGED)
        contactSection.scrollIntoView({ behavior: 'smooth' });

        // ✅ NEW: highlight LEFT div once after scroll
        setTimeout(() => {
          if (contactInfo) {
            contactInfo.classList.add('highlight-once');

            setTimeout(() => {
              contactInfo.classList.remove('highlight-once');
            }, 1500);
          }
        }, 600); // wait for scroll animation
      }
    }
  }

  // Open Gmail compose in browser
  handleEmailClick() {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=akhilamohansahoo675@gmail.com',
      '_blank'
    );
  }
}
