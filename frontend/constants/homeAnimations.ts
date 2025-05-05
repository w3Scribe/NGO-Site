// LEGACY FILE: This file is maintained for backward compatibility.
// New code should import from the consolidated animationSystem.ts file.
import { homeAnimations as animations } from './animationSystem';

// Initial stats for the animated counter on homepage
export const initialStats = animations.initialStats;

// Target stats for the animated counter on homepage
export const targetStats = animations.targetStats;

// Hero section aura/glow animations
export interface AuraAnimation {
  position: string;
  animation: {
    scale: number[];
    opacity: number[];
  };
  transition: {
    duration: number;
    repeat: number;
    repeatType: "reverse" | "loop" | "mirror";
    delay?: number;
  };
}

export const heroAuraAnimations = animations.heroAuras;
