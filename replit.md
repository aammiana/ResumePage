# replit.md

## Overview

This is a full-stack web application for a personal portfolio/resume website showcasing a Data & Business Operations Analyst. The application features a modern, responsive design built with React and TypeScript on the frontend, Express.js on the backend, and PostgreSQL with Drizzle ORM for data persistence. The project follows a monorepo structure with shared schema definitions and uses shadcn/ui components for a polished user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library following the "new-york" style
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation resolvers
- **UI Components**: Comprehensive shadcn/ui component system with Radix UI primitives

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Server Setup**: Custom Vite development server integration with hot module replacement
- **API Design**: RESTful API with `/api` prefix for all endpoints
- **Error Handling**: Centralized error handling middleware with standardized JSON responses
- **Logging**: Custom request/response logging with duration tracking
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage) and interface for database integration

### Data Storage Architecture
- **Database**: PostgreSQL configured through environment variables
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Management**: Shared schema definitions in `/shared/schema.ts` using Drizzle's type-safe schema builder
- **Migrations**: Drizzle Kit for database migrations stored in `/migrations` directory
- **Database Connection**: Neon Database serverless integration for production deployment

### Development and Build System
- **Build Tool**: Vite for frontend with React plugin and development optimizations
- **TypeScript**: Strict type checking with custom path aliases for clean imports
- **Module Resolution**: ESNext modules with bundler resolution strategy
- **Development**: Hot reloading with Vite dev server proxy integration
- **Production**: esbuild for server bundling and Vite for client build

### Project Structure
- `/client` - React frontend application with src, components, pages, and hooks
- `/server` - Express backend with routes, storage abstractions, and Vite integration
- `/shared` - Common TypeScript definitions and database schemas
- `/migrations` - Database migration files managed by Drizzle Kit

## External Dependencies

### Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: TypeScript ORM with PostgreSQL dialect and Zod integration

### UI and Styling
- **shadcn/ui**: Pre-built accessible components built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Headless UI primitives for complex interactive components
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast development server and build tool with React plugin
- **TypeScript**: Static type checking and enhanced developer experience
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESBuild**: Fast JavaScript bundler for server-side code

### Third-party Libraries
- **TanStack Query**: Powerful data synchronization for React applications
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation library
- **Wouter**: Minimalist routing library for React
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Utility for constructing className strings conditionally

### Replit Integration
- **Replit Plugins**: Custom Vite plugins for development error overlay and cartographer integration
- **Development Banner**: Replit-specific development environment indicators