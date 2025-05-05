// All icons and SVG paths used throughout the application
export interface IconPath {
  path: string;
  viewBox?: string;
}

export const svgIcons = {
  // Navigation and buttons
  arrowRight: {
    path: "M13 7l5 5m0 0l-5 5m5-5H6",
    viewBox: "0 0 24 24"
  },
  arrowForward: {
    path: "M17 8l4 4m0 0l-4 4m4-4H3",
    viewBox: "0 0 24 24"
  },

  // Location and contact
  location: {
    path: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M13.5 10.5l-2-2m0 0l-2 2m2-2v6",
    viewBox: "0 0 24 24"
  },
  calendar: {
    path: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
    viewBox: "0 0 24 24"
  },
  person: {
    path: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    viewBox: "0 0 24 24"
  },

  // Content and quotes
  quote: {
    path: "M7.39,6.12A5,5,0,0,0-2.62,6.12,5,5,0,0,0,7.39,6.12 M-2.62,16.12A5,5,0,0,0,7.39,16.12,5,5,0,0,0-2.62,16.12",
    viewBox: "0 0 24 24"
  },

  // Mission categories
  book: {
    path: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    viewBox: "0 0 24 24"
  },
  heart: {
    path: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    viewBox: "0 0 24 24"
  },
  home: {
    path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    viewBox: "0 0 24 24"
  },

  // Add more icons as needed...
};

// Helper function to render SVG icon component with standard properties
export const renderIcon = (
  iconKey: keyof typeof svgIcons,
  className = "h-5 w-5",
  strokeWidth = 2
) => {
  const icon = svgIcons[iconKey]; return {
    viewBox: icon.viewBox || "0 0 24 24",
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    path: icon.path
  };
};

// Simplified access to icon paths only
export const iconPaths = Object.fromEntries(
  Object.entries(svgIcons).map(([key, value]) => [key, value.path])
);