import express from "express";
import morgan from "morgan";
import  cors from "cors";

const app = express();

// Import routes
import roleRoutes from "./routes/role.routes.js";
import lineaRoutes from "./routes/linea.routes.js";
import userRoutes from "./routes/user.routes.js";
import internoRoutes from "./routes/interno.routes.js";
import trabajoRoutes from "./routes/trabajo.routes.js";




// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/role", roleRoutes);
app.use("/api/linea", lineaRoutes);
app.use("/api/user", userRoutes);
app.use("/api/interno", internoRoutes);
app.use("/api/trabajo", trabajoRoutes);







export default app;