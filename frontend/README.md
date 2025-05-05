# 🌟 CharitySmile NGO Platform

A modern web platform connecting NGOs, donors, and volunteers to maximize social impact and transparency.

![CharitySmile Platform](./assets/localhost_5173_.png)

## 🌈 Project Overview

CharitySmile is a comprehensive platform designed to bridge the gap between resources and needs in underserved communities across India. The platform connects donors, volunteers, and NGOs in a seamless ecosystem that maximizes social impact while ensuring complete transparency.

### 🚀 Key Features

- **NGO Partner Network**: Platform for NGOs to showcase their work and connect with donors
- **Volunteer Management**: Tools for volunteers to find opportunities aligned with their interests
- **Donation Tracking**: Transparent tracking of donations from source to impact
- **Impact Visualization**: Stats and metrics showing the real-world impact of contributions
- **User Dashboards**: Personalized experiences for donors, volunteers, and NGO administrators
- **Bilingual Support**: Content in English and Marathi to serve diverse communities

## 💻 Technology Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Routing**: TanStack Router
- **Form Management**: React Hook Form with Zod validation
- **Animations**: Framer Motion
- **State Management**: Zustand, React Context
- **UI Components**: Custom UI with Radix UI primitives
- **Icons**: Lucide React
- **Linting/Formatting**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd NGO_Site/frontend
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 📋 Available Scripts

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run fix-all` - Fix all linting and formatting issues

## 🏗️ Project Structure

```
frontend/
├── app/               # App entry point and configuration
├── assets/            # Images and static assets
├── components/        # Reusable UI components
│   ├── ui/            # Base UI components
│   └── ...            # Feature-specific components
├── constants/         # Shared constants and data
├── lib/               # Utilities and shared logic
├── pages/             # Route components/pages
│   ├── (auth)/        # Authentication routes
│   ├── about/         # About page
│   ├── admin/         # Admin dashboard
│   └── ...            # Other main pages
└── utils/             # Helper functions and utilities
```

## 🛠️ Recent Refactoring

The codebase has recently undergone significant DRY (Don't Repeat Yourself) refactoring. See the [REFACTORING-SUMMARY.md](./REFACTORING-SUMMARY.md) file for detailed information about improvements to:

- Icon system consolidation
- Animation system standardization
- UI element organization
- Documentation improvements

## 📝 License

[MIT License](LICENSE)

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
