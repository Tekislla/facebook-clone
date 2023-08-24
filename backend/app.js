import express from "express";
import path from "path";
import morgan from "morgan";

import routes from "./routes/routes.js";
import { fileURLToPath } from "url";

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

app.use(routes);

app.use(express.static(path.join(__dirname, "public")));

export default app;