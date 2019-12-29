/**
 * Product
 * @class Product
 */
class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

/**
 * Food
 * @class Food
 * @extends {Product}
 */
class Food extends Product {
  weight: number;

  /**
   * Creates an instance of Food.
   * @param {string} name
   * @param {number} price
   * @param {number} weight
   */
  constructor(name: string, price: number, weight: number) {
    super(name, price);
    this.weight = weight;
  }
}

/**
 * Drink
 * @class Drink
 * @extends {Product}
 */
class Drink extends Product {
  ml: number;

  /**
   * Creates an instance of Drink.
   * @param {string} name
   * @param {number} price
   * @param {number} ml
   */
  constructor(name: string, price: number, ml: number) {
    super(name, price);
    this.ml = ml;
  }
}

/**
 * Product Factory
 * @class ProductFactory
 */
class ProductFactory {
  /**
   * Create Products
   *
   * @static
   * @param {string} type
   * @param {ProductProps} props
   * @returns {Product}
   */
  static createProduct(type: string, ...rest): Product {
    switch (type) {
      case "food":
        return new Food(rest[0], rest[1], rest[2]);
      case "drink":
        return new Drink(rest[0], rest[1], rest[2]);
      default:
        return new Product(rest[0], rest[1]);
    }
  }
}

export function testProductFactory() {
  const bread = ProductFactory.createProduct("food", "Bread", 1, 100);
  console.log("bread:", bread);
  console.assert(bread instanceof Food, "Wrong implementation");
  console.assert(bread instanceof Product, "Wrong implementation");
  console.assert(!(bread instanceof Drink), "Wrong implementation");
}
