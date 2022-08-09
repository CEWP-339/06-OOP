class Item {

    #name = "default name";
    #description = "default description";
    static type = "Book";

    #sayHello (name) {
         console.log(`Hello, ${name}`);
    }

    get getName () {
        return this.#name;
    }

    set setName (name) {
        this.#name = name;
    }

    get getDescription () {
        return this.#description;
    }

    set setDescription (description) {
        this.#description = description;
    }

}

item1 = new Item();
// item1.setName = "Chandler";
// console.log(item1.getName);
// item1.setDescription = "I am Item 1!";
// console.log(item1.getDescription);
console.log("static property for Item 1: ", Item.type);
console.log("item1: ", item1);

item2 = new Item();
// item2.setName = "Monica";
// console.log(item2.getName);
// item2.setDescription = "I am Item 2!";
// console.log(item2.getDescription);
console.log("static property for Item 2: ", Item.type);
console.log("item2: ", item2);