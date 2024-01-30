import express from "express";
import helmet from "helmet";
import cors from "cors";

//routers
import pizzasRouter from "./routes/pizzasRouter.js";

const app = express();

app.use(express.json()); //parse les données json
app.use(express.urlencoded({ extended: false })); //parse les données provenant de formulaire
//
app.use(helmet()); //sécurité
app.use(cors()); // cors

//routes
app.use("/pizzas", pizzasRouter);

app.use((req, res, next) => {
  next(404);
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.sendStatus(err);
});

export default app;
