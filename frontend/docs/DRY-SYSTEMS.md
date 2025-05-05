# DRY Systems Architecture

This document explains the newly refactored constants system that follows the DRY (Don't Repeat Yourself) principle. The goal of this refactoring was to consolidate duplicated code, create reusable components, and implement better patterns for managing constants.

## Core Systems

### 1. Icon System (`icons.ts`)

The icon system provides a standardized way to define and use SVG icons throughout the application.

**Key Features:**
- `IconPath` interface to define icon shapes with proper typing
- Categorized icon definitions for better organization
- `renderIcon` helper function for consistent icon rendering
- Backward-compatible `iconPaths` object for legacy code

**Example:**
```typescript
import { svgIcons, renderIcon } from '@constants/icons';

// Using the renderIcon helper
const icon = renderIcon('heart', 'h-6 w-6', 1.5);

// Direct access to an icon definition
const heartIcon = svgIcons.heart;
```

### 2. Animation System (`animationSystem.ts`)

The animation system consolidates all animations used throughout the application into logical groups.

**Key Features:**
- Categorized animations: navigation, element, home page, container
- Type-safe animation interfaces
- Consistent animation patterns
- Backward-compatible exports via legacy files

**Example:**
```typescript
import { navAnimations, elementAnimations } from '@constants/animationSystem';

// Using navbar animations
<motion.nav
  variants={navAnimations.navbar}
  initial="hidden"
  animate="visible"
>
  {/* Navigation content */}
</motion.nav>

// Using button animations
<motion.button
  variants={elementAnimations.button}
  whileHover="hover"
>
  Click Me
</motion.button>
```

### 3. UI System (`uiSystem.ts`)

The UI system provides standardized styles for UI components throughout the application.

**Key Features:**
- Comprehensive button configuration with proper typing
- Common component styles
- Page-specific styles
- Helper functions for style composition

**Example:**
```typescript
import { buttonConfig, getButtonStyles, componentStyles } from '@constants/uiSystem';

// Using button styles
<button className={getButtonStyles('primary')}>Submit</button>

// Using component styles
<div className={componentStyles.card.base + ' ' + componentStyles.card.hover}>
  {/* Card content */}
</div>
```

## Legacy Support

For backward compatibility, the original files have been maintained but updated to import from the new consolidated systems:

- `animations.ts` → imports from `animationSystem.ts`
- `inlineAnimations.ts` → imports from `animationSystem.ts`
- `homeAnimations.ts` → imports from `animationSystem.ts`
- `ui-elements.ts` → imports from `uiSystem.ts` and `icons.ts`

This approach ensures existing code continues to work while new code can take advantage of the improved architecture.

## Best Practices

1. **For new code:**
   - Import directly from the core systems (`icons.ts`, `animationSystem.ts`, `uiSystem.ts`)
   - Use the provided helper functions and type interfaces
   - Follow the established categorization patterns

2. **When updating existing code:**
   - Consider migrating to the new core systems
   - Leverage type safety and helper functions
   - Maintain consistent naming conventions

3. **When adding new constants:**
   - Add to the appropriate core system
   - Include proper typing
   - Document with comments
   - Consider backward compatibility

By following these patterns, we can maintain a cleaner, more maintainable codebase with less duplication and better organization.
