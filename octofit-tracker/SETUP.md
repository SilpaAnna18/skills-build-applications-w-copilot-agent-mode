# OctoFit Tracker - Setup Guide

## Prerequisites
- Node.js 18+ (download from [nodejs.org](https://nodejs.org))
- npm 9+ (comes with Node.js)
- MongoDB 5.0+ (local or cloud)

## Quick Start

### Step 1: Install Dependencies

**Frontend:**
```bash
cd octofit-tracker/frontend
npm install
```

**Backend:**
```bash
cd octofit-tracker/backend
npm install
```

### Step 2: Setup MongoDB

**Option A: Docker (Recommended)**
```bash
docker run -d -p 27017:27017 --name octofit-mongodb mongo:latest
```

**Option B: Local Installation**

*macOS (with Homebrew):*
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

*Linux (Ubuntu/Debian):*
```bash
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sudo systemctl start mongod
```

### Step 3: Configure Environment Variables

**Backend Setup:**
```bash
cd octofit-tracker/backend
cp .env.example .env
```

The `.env` file should contain:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

### Step 4: Start Development Servers

**Terminal 1 - Start Backend:**
```bash
cd octofit-tracker/backend
npm run dev
```

Expected output:
```
Connected to MongoDB
OctoFit Tracker backend running on port 8000
```

**Terminal 2 - Start Frontend:**
```bash
cd octofit-tracker/frontend
npm run dev
```

Expected output:
```
VITE v5.0.0 ready in 123 ms

➜  Local:   http://localhost:5173/
```

### Step 5: Verify Installation

1. **Frontend:** Open [http://localhost:5173](http://localhost:5173) in your browser
   - You should see the OctoFit Tracker welcome page

2. **Backend API Health Check:**
   ```bash
   curl http://localhost:8000/api/health
   ```
   Expected response:
   ```json
   {
     "status": "OK",
     "message": "OctoFit Tracker API is running"
   }
   ```

## Development Commands

### Frontend
```bash
cd octofit-tracker/frontend

# Start dev server with HMR
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Backend
```bash
cd octofit-tracker/backend

# Start dev server with auto-reload
npm run dev

# Compile TypeScript
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

## Project Structure

```
octofit-tracker/
├── frontend/
│   ├── src/
│   │   ├── main.tsx          # React entry point
│   │   ├── App.tsx           # Main component
│   │   ├── App.css           # App styles
│   │   └── index.css         # Global styles
│   ├── index.html            # HTML template
│   ├── vite.config.ts        # Vite configuration
│   ├── tsconfig.json         # TypeScript config
│   └── package.json          # Frontend dependencies
├── backend/
│   ├── src/
│   │   ├── index.ts          # Express server
│   │   └── models/
│   │       └── User.ts       # Mongoose User schema
│   ├── tsconfig.json         # TypeScript config
│   ├── .env.example          # Environment template
│   └── package.json          # Backend dependencies
└── README.md                 # Project documentation
```

## Technologies Used

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **TypeScript** - Type-safe development
- **Axios** - HTTP client
- **ESLint** - Code quality

### Backend
- **Express.js** - Web framework
- **TypeScript** - Type-safe development
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin requests
- **dotenv** - Environment management
- **ESLint** - Code quality

### Database
- **MongoDB** - NoSQL database
- **Port:** 27017

## Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Ensure MongoDB is running
- Docker: `docker ps` to check if container is running
- Local: `brew services list` (macOS) or `sudo systemctl status mongod` (Linux)

### Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::8000
```
**Solution:** Kill process using the port
```bash
# macOS/Linux
lsof -ti:8000 | xargs kill -9

# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### npm install Fails
```
Error: npm ERR! code ERESOLVE
```
**Solution:** Try installing with legacy peer deps
```bash
npm install --legacy-peer-deps
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Setup MongoDB
3. ✅ Configure environment variables
4. ✅ Start development servers
5. 🚀 Start building features!

For more information, see [README.md](./README.md)
