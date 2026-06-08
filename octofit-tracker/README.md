# OctoFit Tracker

A modern multi-tier fitness tracking application built with React 19, Express.js, TypeScript, and MongoDB.

## Project Structure

```
octofit-tracker/
├── frontend/          # React 19 + Vite frontend
└── backend/           # Express.js + TypeScript backend
```

## Architecture

### Frontend (Port 5173)
- **Framework**: React 19
- **Build Tool**: Vite
- **Language**: TypeScript
- **State Management**: React Hooks
- **HTTP Client**: Axios

### Backend (Port 8000)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (Port 27017)
- **ORM**: Mongoose

## Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB 5.0+

## Getting Started

### Frontend Setup

```bash
cd octofit-tracker/frontend
npm install
npm run dev
```

Frontend will be available at `http://localhost:5173`

### Backend Setup

```bash
cd octofit-tracker/backend
npm install
cp .env.example .env
npm run dev
```

Backend API will be available at `http://localhost:8000`

### MongoDB Setup

Ensure MongoDB is running on `mongodb://localhost:27017`

```bash
# macOS (with Homebrew)
brew services start mongodb-community

# Linux (systemd)
sudo systemctl start mongod

# Docker
docker run -d -p 27017:27017 --name mongodb mongo:latest
```

## Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend Development
```bash
cd backend
npm run dev      # Start dev server with watch mode
npm run build    # Compile TypeScript
npm run start    # Start production server
npm run lint     # Run ESLint
```

## API Endpoints

- `GET /api/health` - Health check endpoint

## Environment Variables

Create a `.env` file in the backend directory based on `.env.example`:

```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## License

ISC
