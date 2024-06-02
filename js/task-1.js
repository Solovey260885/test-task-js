//Задачка як додаткове заняття на практиці

// Знайти найдорожчий продукт у категорії "meat"
// Напиши для цього функцію getMostExpensiveMeatProduct(products)

function getMostExpensiveMeatProduct(products, categoryName) {
  const meatProduct = products
    .filter((product) => product.category === categoryName) // filter category
    .toSorted((a, b) => b.price - a.price); // sorted max-min
  return meatProduct[0]; // idx [0], (max)
}

const products = [
  { name: "Apple", category: "fruits", price: 1.2, stock: 50 },
  { name: "Banana", category: "fruits", price: 0.8, stock: 100 },
  { name: "Carrot", category: "vegetables", price: 0.5, stock: 200 },
  { name: "Broccoli", category: "vegetables", price: 1.0, stock: 150 },
  { name: "Milk", category: "dairy", price: 1.5, stock: 20 },
  { name: "Cheese", category: "dairy", price: 2.5, stock: 5 },
  { name: "Chicken", category: "meat", price: 5.0, stock: 30 },
  { name: "Beef", category: "meat", price: 7.0, stock: 25 },
];

// console.log(products);
console.log(getMostExpensiveMeatProduct(products, "dairy"));

//******Додаткове заняття на лекції******* */

// Необхідно створити клас BankAccount, який представляє
// банківський рахунок. Клас повинен мати приватну властивість balance,
// яка представляє баланс рахунку. Клас повинен також мати публічні методи deposit
// та withdraw, які дозволяють здійснювати операції з депозитом та зняттям коштів з
// рахунку. При цьому balance повинна бути доступна лише в межах класу
// BankAccount та його приватних методів.

class BankAccount {
  #balance = 0;
  constructor() {
    this.#balance;
  }
  deposit(value) {
    this.#balance += value;
    return this.#balance;
  }
  withdraw(value) {
    this.#balance -= value;
    return this.#balance;
  }
}
const instance = new BankAccount();
instance.deposit(100);
console.log("first deposit", instance);
instance.deposit(1200);
console.log("second deposit", instance);
instance.withdraw(1000);
console.log("withdrow", instance);
