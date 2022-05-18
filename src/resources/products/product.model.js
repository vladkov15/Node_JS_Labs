const { v4: uuid } = require('uuid');

class Product {
  constructor({ id = uuid(), name = 'Суши', price = 50.0, ageOfIssue = 0, lifeTime = 14  } = {}) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ageOfIssue = ageOfIssue;
    this.lifeTime = lifeTime;
  }

  static toResponse(product) {
    const { id, name, price, ageOfIssue, lifeTime } = product;
    return { id, name, price, ageOfIssue, lifeTime };
  }
}

module.exports = Product;
