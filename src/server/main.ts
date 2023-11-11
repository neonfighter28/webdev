import express from "express";
import ViteExpress from "vite-express";

// creates the expres app do not change
const app = express();

// add your routes here

// example route which returns a message
app.get("/hello", async function (_req, res) {
  res.status(200).json({ message: "Hello World!" });
});

// Do not change below this line
ViteExpress.listen(app, 5173, () =>
    console.log("Server is listening on http://localhost:5173"),
);
