import config from "./config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

// ✅ Import all route files
import authRoutes from "./server/routes/auth.routes.js";
import userRoutes from "./server/routes/user.routes.js";
import contactRoutes from "./server/routes/contact.routes.js";
import projectRoutes from "./server/routes/project.routes.js";
import qualificationRoutes from "./server/routes/qualification.routes.js";

mongoose.Promise = global.Promise;

// 🗄️ MongoDB connection
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.error("Database connection error:", err.message);
  });

mongoose.connection.on("error", () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

// 🏠 Default route for assignment display
app.get("/", (req, res) => {
  res.send("Hello World");
});


// 📦 Authentication routes
app.use("/auth", authRoutes);

// 📦 API routes for CRUD operations
app.use("/api/users", userRoutes); // 👈 Add this line
app.use("/api/contacts", contactRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/qualifications", qualificationRoutes);

// 🚀 Start the server
app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`Server started on port ${config.port}.`);
});
