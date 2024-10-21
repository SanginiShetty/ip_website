import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.router.js";
import hotelRouter from "./routes/hotel.router.js"; // Ensure this path is correct

dotenv.config();

const app = express();

// Configure CORS to allow requests from your frontend domain (use environment variable for flexibility)
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Fallback to localhost if not set
    credentials: true,
};

app.use(cors(corsOptions));

// Middleware setup
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/hotels", hotelRouter);

// Global error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        message: err.message || "Something broke!",
        stack: process.env.NODE_ENV === "development" ? err.stack : undefined, // Show stack trace in development
    });
});

export default app;
