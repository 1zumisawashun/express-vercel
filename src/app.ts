import path from "path";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.listen(PORT, () =>
  console.log(`server running in http://localhost:${PORT}`)
);
