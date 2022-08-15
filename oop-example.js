class Item {

    name = "default name";
    description = "default description";

    sayHello (name) {
         console.log(`Hello, ${name}`);
    }

    getListingDescription () {
        return this.description;
    }

    // get getName () {
    //     return this.#name;
    // }

    // set setName (name) {
    //     this.#name = name;
    // }

    // get getDescription () {
    //     return this.#description;
    // }

    // set setDescription (description) {
    //     this.#description = description;
    // }

}

class Book extends Item {
    author;

    getListingDescription () {
        return this.description + " by " + this.author;
    }
}




item1 = new Item();
// item1.setName = "Chandler";
// console.log(item1.getName);
console.log(item1.name);
// item1.setDescription = "I am Item 1!";
// console.log(item1.getDescription);

item2 = new Item();
// item2.setName = "Monica";
// console.log(item2.getName);
console.log(item2.name);
// item2.setDescription = "I am Item 2!";
console.log(item2.getListingDescription()); //3

book1 = new Book();
console.log(book1.name);
book1.name = "Aaron";
book1.description = "This is a book called Aaron";
book1.author = "Shreya";
console.log(book1);
book1.sayHello(book1.name); //1
console.log(book1.getListingDescription()); //2

