# Full Stack React Portfolio Application

## Overview

This is a modern full-stack web application built as a portfolio/personal website. The application uses React with TypeScript for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence. The project follows a monorepo structure with shared code between client and server, and includes a comprehensive UI component library built with shadcn/ui and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: Tailwind CSS with CSS custom properties for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API structure with `/api` prefix
- **Middleware**: Built-in Express middleware for JSON parsing and CORS

### Data Layer
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared TypeScript schemas using Drizzle-Zod integration
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Directory Structure
```
├── client/          # React frontend application
│   ├── src/
│   │   ├── components/ui/  # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/          # Express.js backend
├── shared/          # Shared code between client/server
│   └── schema.ts    # Database schemas and types
└── migrations/      # Database migration files
```

### Database Schema
Currently includes a basic user management system:
- **Users table**: ID, username, password fields with unique constraints
- **Type safety**: Generated TypeScript types from Drizzle schemas
- **Validation**: Zod schemas for runtime validation

### UI Component System
- **Design System**: shadcn/ui with "New York" style variant
- **Theme Support**: CSS custom properties for light/dark themes
- **Component Library**: 40+ pre-built UI components including forms, navigation, data display
- **Accessibility**: Built on Radix UI primitives for robust a11y support

## Data Flow

### Client-Server Communication
1. **API Requests**: Custom fetch wrapper with error handling
2. **Query Management**: TanStack Query for caching and synchronization
3. **Type Safety**: Shared schemas ensure consistent data types
4. **Error Handling**: Centralized error handling with toast notifications

### Development Workflow
1. **Hot Reload**: Vite development server with HMR
2. **Type Checking**: TypeScript compilation for both client and server
3. **Database**: Drizzle push for schema synchronization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form
- **Backend**: Express.js, Node.js built-ins
- **Database**: Neon serverless PostgreSQL, Drizzle ORM
- **Build Tools**: Vite, TypeScript, ESBuild

### UI and Styling
- **Component Library**: Radix UI primitives (40+ packages)
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: Lucide React icon library
- **Utilities**: clsx, tailwind-merge, class-variance-authority

### Development Tools
- **Validation**: Zod for schema validation
- **Utilities**: date-fns for date manipulation
- **Sessions**: Connect-pg-simple for PostgreSQL session storage

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied to PostgreSQL instance

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable
- **Sessions**: PostgreSQL-backed session storage
- **Production**: Node.js server serves both API and static files

### Development vs Production
- **Development**: Vite dev server with Express backend
- **Production**: Single Node.js process serving built assets and API

The application is designed for easy deployment to platforms like Replit, with built-in support for environment-based configuration and database provisioning.

## Changelog
```
Changelog:
- July 01, 2025. Initial setup
```

## User Preferences

Preferred communication style: Simple, everyday language.