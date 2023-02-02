const express = require("express");
const mongoose = require("mongoose").set("strictQuery", false);
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  `mongodb+srv://jakiSundays:${process.env.MONGODB_PASSWORD}@windows98.zbbwuad.mongodb.net/?retryWrites=true&w=majority`,
  () => console.log("Connected to DB")
);

const userRoutes = require("./routes/userRoute");
app.use("/user", userRoutes);
const noteRoutes = require("./routes/noteRoute");
app.use("/notes", noteRoutes);

app.get('/', (req,res) => {
  res.send('try')
})

app.listen(PORT, () =>
  console.log(`Server running on https://server-windows98.onrender.com/${PORT}`)
);
