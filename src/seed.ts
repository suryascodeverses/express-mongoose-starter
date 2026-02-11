import { connectDB } from "./config/database";
import { User } from "./models";
import mongoose from "mongoose";

async function seed() {
  try {
    await connectDB();
    console.log("🌱 Starting seed...");

    // Clear existing users
    await User.deleteMany({});

    // Create sample users
    const users = await User.create([
      {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
      },
      {
        name: "Jane Smith",
        email: "jane@example.com",
        password: "password123",
      },
    ]);

    console.log("✅ Seed completed successfully");
    console.log(`Created ${users.length} users`);

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("❌ Seed failed:", error);
    await mongoose.connection.close();
    process.exit(1);
  }
}

seed();
