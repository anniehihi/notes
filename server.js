const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const DB = process.env.DB.replace("<password>", process.env.DB_PASSWORD);

mongoose.set("strictQuery", false);
mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  });
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
