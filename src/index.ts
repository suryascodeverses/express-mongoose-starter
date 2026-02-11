import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import routes from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express Mongoose Starter API" });
});

app.use("/api", routes);

// Graceful shutdown
process.on("SIGINT", async () => {
  const mongoose = await import("./config/database");
  await mongoose.default.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  const mongoose = await import("./config/database");
  await mongoose.default.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

// Start server
const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📍 API endpoint: http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();

export default app;
