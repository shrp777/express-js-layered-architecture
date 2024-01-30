export default class PizzaService {
  async readAll() {
    //simule une lecture dans la base de données
    return [
      { name: "Margherita", price: 7 },
      { name: "Quattro Stagioni", price: 12 }
    ];
  }
}
