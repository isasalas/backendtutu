import express from "express";
import morgan from "morgan";
import  cors from "cors";

const app = express();

// Import routes
import internoRoutes from "./routes/interno.routes.js";
import trabajoRoutes from "./routes/trabajo.routes.js";
import userRoutes from "./routes/user.routes.js";
import lineaRoutes from "./routes/linea.routes.js";
import roleRoutes from "./routes/role.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/interno", internoRoutes);
app.use("/api/trabajo", trabajoRoutes);
app.use("/api/user", userRoutes);
app.use("/api/linea", lineaRoutes);
app.use("/api/role", roleRoutes);




export default app;