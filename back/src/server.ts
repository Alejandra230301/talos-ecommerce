import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";

const app = express();

app.use(cors({
  origin: ["https://talos-ecommerce-rk5r384v8-alejandra-pedrazas-projects.vercel.app"],
  methods: ["POST", "GET", "PUT"],
  credentials: true
}));
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
