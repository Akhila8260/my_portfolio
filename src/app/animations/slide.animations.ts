import { trigger, state, style, transition, animate } from '@angular/animations';

export const slideInAnimation = trigger('slideIn', [
  state('hidden', style({
    transform: 'translateY(60px)',
    opacity: 0
  })),
  state('visible', style({
    transform: 'translateY(0)',
    opacity: 1
  })),
  // 🔁 allow animation both ways so it can replay
  transition('hidden <=> visible', animate('700ms ease-out'))
]);
