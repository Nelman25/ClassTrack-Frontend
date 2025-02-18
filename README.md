# ClassTrack Frontend

ClassTrack is a comprehensive class management system designed to streamline common teaching tasks that are traditionally handled manually or through Excel spreadsheets. This repository contains the frontend implementation of ClassTrack, providing professors with an intuitive interface to manage their classes efficiently.

## Features

- Student Information Management
- Automated Grade Computation
- Custom Grading System Configuration
- Attendance Tracking

## Technology Stack

- **Framework:** React 19
- **CSS Framework:** Tailwind CSS with shadCN
- **State Management:** Zustand
- **Routing:** React Router
- **Build Tool:** Vite
- **Authentication:** Firebase

## Prerequisites

- Node.js (version compatible with React 19)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Navigate to the project directory:

```bash
cd ClassTrack-Frontend
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The application will be available at `localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Application views/routes
├── store/          # State Management
│   ├── classes/      # Classes related state management
│   ├── students/     # Students related state management
│   ├── grades/       # Grades related state management
│   └── attendance/   # Attendance related state management
└── services/       # API interaction logic

```

## Backend Integration

The frontend interacts with a separate backend service. Authentication is handled through Firebase, with the backend validating tokens provided by the Firebase authentication system.

## Current Development Status

The project is currently in active development, with focus on:

- Implementing core website structure
- Integrating backend APIs as they become available

## Maintainer

[Jonel Villaver](https://github.com/Nelman25)
