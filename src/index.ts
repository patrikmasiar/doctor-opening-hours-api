import express from "express";
import routes from "./routes";
import cors from "cors";
// import mongoose from "mongoose";
// import { config } from "dotenv";

// config();

const app = express();

// mongoose
//   .connect(process.env.DATABSE_URL)
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((error) => console.log(error));

app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err);
  return res.status(500).json({
    error: {
      message: "Something went wrong.",
    },
    data: null,
  });
});

app.use(cors());
app.use(routes);

async function start(): Promise<void> {
  try {
    app.listen(process.env.PORT || 3010, () => {
      console.log(
        `Server started at http://localhost:${process.env.PORT || 3010}`
      );
    });
  } catch (error) {
    console.error({
      message: `Unable to start server on port ${process.env.PORT || 3010}`,
    });
    process.exit(1);
  }
}

start();
