const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

dotenv.config();
const app = express();

app.use(cors({
  origin: "http://localhost:3000", // React port
  credentials: true
})
  // cors({
  //   origin: "https://task-manager-app-by-aslam.netlify.app",
  //   credentials: true,
  // })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() =>
    app.listen(5000, () => console.log(`Server running on port 5000`))
  )
  .catch((err) => console.log(err));
