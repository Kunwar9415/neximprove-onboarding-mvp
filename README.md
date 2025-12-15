# Neximprove – End-to-End Customer Onboarding Workflow (MVP)

## Overview
This project implements an end-to-end customer onboarding workflow for customs broker users.
It allows exporters/importers to register, authenticate securely, and access a protected dashboard.

The system demonstrates secure user authentication, backend APIs, and a frontend-ready architecture,
built as part of the Neximprove intern selection task.

---

## Project Architecture

neximprove-onboarding-mvp  
├── backend  
│   ├── server.js  
│   ├── routes  
│   │   └── authRoutes.js  
│   ├── controllers  
│   │   └── authController.js  
│   ├── middleware  
│   │   └── authMiddleware.js  
│   ├── config  
│   │   └── db.js  
│   ├── .env  
│  
├── frontend  
│   └── React onboarding & dashboard UI  
│  
└── README.md  

---

## Security Implementation

- Passwords are securely hashed using **bcrypt**
- Authentication is handled using **JWT (JSON Web Tokens)**
- Protected routes require a valid JWT token
- Secrets (JWT key, configs) are stored in `.env` file
- `.env` and `node_modules` are excluded from GitHub

---

## Authentication Flow

1. User registers with Name, Email, Password, GSTIN, and Role
2. Password is hashed and stored securely
3. User logs in with valid credentials
4. JWT token is generated and returned
5. Token is sent via Authorization header
6. Protected profile API returns user data after token verification

---

## API Endpoints

### Register User
POST `/api/auth/register`

### Login User
POST `/api/auth/login`

### Get User Profile (Protected)
GET `/api/auth/profile`  
Authorization: `Bearer <JWT_TOKEN>`

---

## Database
- SQLite is used for development and testing
- Stores user profile and authentication data
- Can be easily replaced with PostgreSQL

---

## How to Run the Project

### Backend Setup
cd backend
npm install
npx nodemon server.js

Server will run on:
http://localhost:5000

---

## Testing
- APIs tested using **Thunder Client (VS Code)**
- Registration, Login, and Protected routes verified

## Author
Kunwar Kantikeya Gautam

---

## Project Status
✔ User registration completed  
✔ Secure authentication implemented  
✔ Protected dashboard API working  
✔ End-to-end onboarding flow complete  
