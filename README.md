# Express Mongoose Starter

A complete Express.js backend starter project with TypeScript, Mongoose ODM, MongoDB, and JWT authentication.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [API Endpoints](#api-endpoints)
- [Usage Examples](#usage-examples)

## ✨ Features

- ✅ Express.js with TypeScript
- ✅ Mongoose ODM with MongoDB
- ✅ Database connection via connection string
- ✅ User authentication with JWT
- ✅ Password hashing with bcrypt
- ✅ Complete CRUD operations for User model
- ✅ Environment variable configuration
- ✅ Clean project structure
- ✅ Input validation
- ✅ Error handling
- ✅ CORS enabled
- ✅ Hot reload for development
- ✅ Database seeding support

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **ODM:** Mongoose
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Password Hashing:** bcryptjs
- **Development:** Nodemon, ts-node

## 📁 Project Structure

```
express-mongoose-starter/
├── src/
│   ├── config/
│   │   └── database.ts           # MongoDB connection setup
│   ├── controllers/
│   │   ├── authController.ts     # Authentication logic
│   │   └── userController.ts     # User CRUD operations
│   ├── middleware/
│   │   └── auth.ts               # JWT authentication middleware
│   ├── models/
│   │   ├── User.ts               # User model schema
│   │   └── index.ts              # Models export
│   ├── routes/
│   │   ├── authRoutes.ts         # Authentication routes
│   │   ├── userRoutes.ts         # User routes
│   │   └── index.ts              # Routes aggregator
│   ├── utils/
│   │   └── jwt.ts                # JWT utilities
│   ├── index.ts                  # Application entry point
│   └── seed.ts                   # Database seeding script
├── .env.example                  # Environment variables template
├── .gitignore                    # Git ignore rules
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── nodemon.json                  # Nodemon configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (v4.4 or higher) - Local or MongoDB Atlas
- npm or yarn

### Installation

1. **Clone or create the project:**

   ```bash
   mkdir express-mongoose-starter
   cd express-mongoose-starter
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your MongoDB connection string.

4. **Start MongoDB (if using local):**

   ```bash
   # macOS
   brew services start mongodb-community

   # Linux
   sudo systemctl start mongod

   # Windows
   net start MongoDB
   ```

5. **Optional - Seed the database:**

   ```bash
   npm run seed
   ```

6. **Start the development server:**

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PORT=3000
NODE_ENV=development

# MongoDB Connection String
# Local MongoDB: mongodb://localhost:27017/express_mongoose_db
# MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
MONGODB_URI=mongodb://localhost:27017/express_mongoose_db

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=24h
```

### MongoDB Connection String Format

**Local MongoDB:**

```
MONGODB_URI=mongodb://localhost:27017/express_mongoose_db
```

**MongoDB Atlas (Cloud):**

```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/express_mongoose_db?retryWrites=true&w=majority
```

**Docker MongoDB:**

```
MONGODB_URI=mongodb://mongo:27017/express_mongoose_db
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload

# Production
npm run build        # Compile TypeScript to JavaScript
npm start            # Run compiled JavaScript

# Database
npm run seed         # Seed the database with sample data
```

## 🔌 API Endpoints

### Authentication Endpoints

| Method | Endpoint             | Description       | Auth Required |
| ------ | -------------------- | ----------------- | ------------- |
| POST   | `/api/auth/register` | Register new user | No            |
| POST   | `/api/auth/login`    | Login user        | No            |

### User Endpoints

| Method | Endpoint         | Description      | Auth Required |
| ------ | ---------------- | ---------------- | ------------- |
| GET    | `/api/users/me`  | Get current user | Yes           |
| GET    | `/api/users`     | Get all users    | Yes           |
| GET    | `/api/users/:id` | Get user by ID   | Yes           |
| PUT    | `/api/users/:id` | Update user      | Yes           |
| DELETE | `/api/users/:id` | Delete user      | Yes           |

## 📝 Usage Examples

### Register a New User

```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**

```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6571234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Login

```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "6571234567890abcdef12345",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2024-01-15T10:30:00.000Z",
    "updatedAt": "2024-01-15T10:30:00.000Z"
  }
}
```

### Get Current User

```bash
curl -X GET http://localhost:3000/api/users/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Get All Users

```bash
curl -X GET http://localhost:3000/api/users \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Update User

```bash
curl -X PUT http://localhost:3000/api/users/6571234567890abcdef12345 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Updated",
    "email": "john.updated@example.com"
  }'
```

### Delete User

```bash
curl -X DELETE http://localhost:3000/api/users/6571234567890abcdef12345 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🔒 Authentication

This project uses JWT (JSON Web Tokens) for authentication. After successful login or registration, you'll receive a token. Include this token in the Authorization header for protected routes:

```
Authorization: Bearer YOUR_JWT_TOKEN
```

## 🗄️ Database Schema

### User Model

```typescript
{
  _id: ObjectId (auto-generated)
  name: string (required)
  email: string (required, unique, validated)
  password: string (required, hashed, min 6 characters)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

### Adding More Models and Relations

To add more models and relations, create new model files in `src/models/`:

**Example - Post Model:**

```typescript
// src/models/Post.ts
import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  content: string;
  published: boolean;
  userId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    published: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model<IPost>("Post", postSchema);
export default Post;
```

**Update User Model to include relation:**

```typescript
// In User schema
posts: [
  {
    type: Schema.Types.ObjectId,
    ref: "Post",
  },
];
```

**Populate relations when querying:**

```typescript
// Get user with posts
const user = await User.findById(id).populate("posts");

// Get post with user
const post = await Post.findById(id).populate("userId");
```

## 🔄 Mongoose vs Prisma vs Sequelize

| Feature    | Mongoose   | Prisma                           | Sequelize                       |
| ---------- | ---------- | -------------------------------- | ------------------------------- |
| Database   | MongoDB    | PostgreSQL, MySQL, MongoDB, etc. | PostgreSQL, MySQL, SQLite, etc. |
| Type       | ODM        | ORM                              | ORM                             |
| Schema     | Code-first | Schema-first                     | Code-first                      |
| TypeScript | Good       | Excellent                        | Good                            |
| Migrations | Manual     | Built-in                         | Built-in                        |

## 🚢 Deployment Tips

### MongoDB Atlas Setup

1. Create a free cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist your IP (or use 0.0.0.0/0 for development)
4. Get your connection string
5. Update `MONGODB_URI` in your `.env`

### Railway / Render / Heroku

1. Set `MONGODB_URI` environment variable
2. Set `JWT_SECRET` environment variable
3. Run build command: `npm run build`
4. Start command: `npm start`

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

Built with ❤️ using Express.js, Mongoose, and TypeScript.
