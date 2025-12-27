import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private isLight = false;

  constructor() {
    const saved = localStorage.getItem('theme');

    if (saved === 'light') {
      this.setLight();
    } else {
      this.setDark(); // 🌙 force dark by default
    }
  }

  toggle() {
    this.isLight ? this.setDark() : this.setLight();
  }

  setLight() {
    document.body.classList.add('light-theme');
    this.isLight = true;
    localStorage.setItem('theme', 'light');
  }

  setDark() {
    document.body.classList.remove('light-theme');
    this.isLight = false;
    localStorage.setItem('theme', 'dark');
  }

  isLightMode() {
    return this.isLight;
  }
}
