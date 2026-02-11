#!/bin/bash

# Express Mongoose Starter - Project Structure Generator
# This script creates all necessary directories and empty files

echo "🚀 Creating Express Mongoose Starter project structure..."
echo ""

# Create root directories
echo "📁 Creating directories..."
mkdir -p src/config
mkdir -p src/controllers
mkdir -p src/middleware
mkdir -p src/models
mkdir -p src/routes
mkdir -p src/utils

# Create src/config files
echo "📄 Creating config files..."
touch src/config/database.ts

# Create src/controllers files
echo "📄 Creating controller files..."
touch src/controllers/authController.ts
touch src/controllers/userController.ts

# Create src/middleware files
echo "📄 Creating middleware files..."
touch src/middleware/auth.ts

# Create src/models files
echo "📄 Creating model files..."
touch src/models/User.ts
touch src/models/index.ts

# Create src/routes files
echo "📄 Creating route files..."
touch src/routes/authRoutes.ts
touch src/routes/userRoutes.ts
touch src/routes/index.ts

# Create src/utils files
echo "📄 Creating utility files..."
touch src/utils/jwt.ts

# Create main src files
echo "📄 Creating main application files..."
touch src/index.ts
touch src/seed.ts

# Create root configuration files
echo "📄 Creating root configuration files..."
touch package.json
touch tsconfig.json
touch nodemon.json
touch .env.example
touch .gitignore
touch README.md

echo ""
echo "✅ Project structure created successfully!"
echo ""
echo "📂 Directory structure:"
tree -L 3 -I 'node_modules|dist' || find . -type d -o -type f | grep -v node_modules | grep -v dist | sort

echo ""
echo "📋 Next steps:"
echo "1. Copy content into each file from the project template"
echo "2. Run: npm install"
echo "3. Copy .env.example to .env and configure MONGODB_URI"
echo "4. Start MongoDB (local or use MongoDB Atlas)"
echo "5. Run: npm run dev"
echo ""