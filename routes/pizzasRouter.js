import express from "express";
import GetPizzasAction from "../actions/GetPizzasAction.js";
import PizzaService from "../services/PizzaService.js";

const router = express.Router();
const service = new PizzaService(); //instanciation du service à injecter

const action = new GetPizzasAction(service); //injection du service dans l'action

router
  .route("/")
  .get(action.execute.bind(action))
  .all((req, res, next) => next(405)); //method not allowed

export default router;
