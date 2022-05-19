import express, { json } from "express";
import cors from "cors";
import "dotenv/config";
import "express-async-errors";
import routes from "./routes/index.routes.js";
import { errorHandler } from "./middlewares/errorHandler.middlware.js";

const app = express();

app.use(cors());
app.use(json());
app.use("/api", routes);
app.use(errorHandler);

export default app;