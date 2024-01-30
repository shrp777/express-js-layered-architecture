export default class GetPizzasAction {
  #_service; //attribut privé

  constructor(service) {
    this.#_service = service; //injection de dépendance
  }

  async execute(req, res, next) {
    const pizzas = await this.#_service.readAll();
    res.json(pizzas);
  }
}
