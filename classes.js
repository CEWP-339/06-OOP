class Item {
  #name;
  #description;
  static type = "book";

  constructor() {
    console.log("In the constructor!");
  }

  get getName() {
    return this.#name;
  }

  get getDescription() {
    return this.#description;
  }

  set setName(name) {
    this.#name = name;
  }

  set setDescription(description) {
    this.#description = description;
  }

  static welcomeMessage() {
    console.log("You are welcome here!");
  }

  getListingDescription() {
    return this.description;
  }
}

class Book extends Item {
  author;

  getListingDescription() {
    return this.description + " by " + this.author;
  }
}

item1 = new Item();
item1.price = 32.99;
item1.setName = "Item1";
console.log(Item.type);
Item.welcomeMessage();
console.log(item1.getName);
console.log(item1.getListingDescription());

item2 = new Item();
item2.setName = "Item2";
console.log(item2.getName);
item2.setDescription = "This is Item 2!";
console.log(item2.getDescription);
console.log(item2);

book1 = new Book();
book1.setName = "BOOK1";
book1.setDescription = "It's a book";
book1.author = "Becca Fitzpatrick";
console.log(book1.getName);
console.log(Book.type);
console.log(book1.getListingDescription());
console.log(book1);
