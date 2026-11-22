# Full-Stack Notes App

A full-stack notes application: a React frontend talks to a Node.js / Express REST API that stores notes in MongoDB.

## Features
- Create, read, update and delete notes (full CRUD)
- REST API with validation and proper status codes
- MongoDB data modelling with Mongoose (timestamps included)
- Loading and error states in the UI

## Tech
React, Vite, Node.js, Express.js, MongoDB, Mongoose

## Project structure
```
backend/    Express API (server.js, routes/, models/)
frontend/   React app (Vite)
```

## API
| Method | Endpoint         | Description     |
|--------|------------------|-----------------|
| GET    | /api/notes       | List all notes  |
| POST   | /api/notes       | Create a note   |
| PUT    | /api/notes/:id   | Update a note   |
| DELETE | /api/notes/:id   | Delete a note   |

## Run locally
You need Node.js and a MongoDB instance (local, or a free MongoDB Atlas cluster).

**Backend**
```bash
cd backend
cp .env.example .env     # then set MONGO_URI
npm install
npm run dev
```

**Frontend** (in a second terminal)
```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## What I learned
Designing a REST API, connecting Express to MongoDB, validating input, and wiring a React frontend to a backend with `fetch`.
