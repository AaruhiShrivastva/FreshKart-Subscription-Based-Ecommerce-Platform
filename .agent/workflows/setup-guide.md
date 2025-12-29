---
description: how to set up the project in a new environment
---

# 🛠️ Daily Essentials E-Commerce Platform - Setup Guide

Follow these steps to get the **Daily Essentials Subscription Platform** running on your local machine using VS Code.

## 1. Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 16 or higher)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (Running on localhost:27017)
- [VS Code](https://code.visualstudio.com/)

## 2. Install Project Dependencies

**Option A: Quick Install (Recommended)**
```bash
# Install all dependencies for root, backend, and frontend in one command
npm run install-all
```

**Option B: Manual Install**
```bash
# Install root dependencies (like concurrently)
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Install frontend dependencies
cd frontend
npm install
cd ..
```

## 3. Configure Environment Variables
Create a file named `.env` inside the `backend/` folder with these details:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/ecommerce_subscription
JWT_SECRET=supersecretkey123
```

> **Note**: Change `JWT_SECRET` to a more secure random string in production.

## 4. Seed the Database
To populate the database with initial products, categories, and sample data:

```bash
# In the root directory
npm run seed
```

This will create:
- 300+ grocery products across 8 categories
- Sample user accounts
- Initial inventory data

## 5. Run the Application
Start both frontend and backend servers simultaneously:

```bash
npm run dev
```

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000

## 6. Default Admin Access
After seeding, you can log in with:
- Check the seeder output for admin credentials

## 7. Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check Windows Services
- Verify connection string in `backend/.env`

### Port Conflicts
- If port 5000 or 5173 is busy, change ports in:
  - `backend/.env` (PORT variable)
  - `frontend/vite.config.js` (server.port)

### CSS Lint Warnings
- The `.vscode/settings.json` file is configured to ignore Tailwind CSS `@tailwind` directive warnings
- If you see warnings, ensure VS Code has loaded the workspace settings

### Dependencies Issues
- Delete `node_modules` folders and `package-lock.json` files
- Run `npm run install-all` again

## 8. Project Structure
```
PROJECT ecommerce/
├── backend/          # Express.js API server
├── frontend/         # React + Vite application
├── .agent/           # Workflow definitions
├── .vscode/          # VS Code settings
└── package.json      # Root scripts for dev workflow
```
