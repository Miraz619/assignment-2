# DevPulse---Internal Tech Issue & Feature Tracker

DevPulse is a backend API for managing internal software team issues. Users can register, login, create issues, view issues, and update or delete issues based on their role.

## Live URL

not deployed yet

## Features

-User can registration and login 
-JWT authentication
-Role based authorization
-authorized user can create issue 
-anyone can see all issue and also thier own issue
-contibuter can update their own issue
-mainter can update and deleter any issue

## Tech Stack

- Node.js
- Express.js
- TypeScript
- PostgreSQL
- RAW SQL
- bcrypt
- jsonwebtoken
- dotenv


## Setup steps

### 1. Clone the repository

```bash
 https://github.com/Miraz619/assignment-2.git
```
### 2. Go to the project folder

```bash
cd assignment-2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create `.env` file

Create a `.env` file in the root folder and add the following variables:

```env
PORT=5000
DATABASE_URL=your_postgresql_connection_string
JWT_SECRET=your_jwt_secret
```

### 5. Run the project locally

```bash
npm run dev
```

## API endpoints

### Authentication

| Method | Endpoint | Access |  
|---|---|---|
| POST | `/api/auth/signup` | Public |
| POST | `/api/auth/login` | Public |

### Issues

| Method | Endpoint | Access |
|---|---|---|
| POST | `/api/issues` | Authenticated |
| GET | `/api/issues` | Public |
| GET | `/api/issues/:id` |Public|
| PATCH | `/api/issues/:id` | Contributor/Maintainer |
| DELETE | `/api/issues/:id` | Maintainer only |

