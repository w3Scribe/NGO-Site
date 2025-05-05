// Core systems
export * from './animationSystem';
export * from './icons';
export * from './uiSystem';

// Data files
export * from './homeData';
export * from './localData';
export * from './uiContent';

// Supporting files
export * from './navigation';
export * from './styles';

// Legacy exports (to maintain backward compatibility)
// These will import from the consolidated files above
export * from './animations';
// Re-exporting from homeAnimations but excluding the already exported AuraAnimation interface
export { heroAuraAnimations, initialStats, targetStats } from './homeAnimations';
export * from './inlineAnimations';

