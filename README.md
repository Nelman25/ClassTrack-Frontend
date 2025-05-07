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
git clone https://github.com/Nelman25/ClassTrack-Frontend.git
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
├── assets/             # Static assets like images, fonts, etc.
├── components/         # Reusable UI components
├── constants/          # Constant values used throughout the app
├── helpers/            # Utility/helper functions
├── lib/                # External libraries or shared logic
├── pages/              # Page-level components (views/routes)
├── stores/             # State management using stores (e.g., Zustand, Redux)
│   ├── attendances/      # Attendance-related state logic
│   ├── classes/          # Class-related state logic
│   ├── grades/           # Grades-related state logic
│   ├── students/         # Student-related state logic
│   └── userActivity/     # User activity tracking or logs
├── App.jsx             # Root component
├── firebase.js         # Firebase configuration and setup
├── index.css           # Global CSS styles
├── main.jsx            # Entry point for React


```

## Backend Integration

The frontend interacts with a separate backend service. Authentication is handled through Firebase, with the backend validating tokens provided by the Firebase authentication system.

## Maintainer

[Jonel Villaver](https://github.com/Nelman25)
