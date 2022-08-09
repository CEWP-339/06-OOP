class Item {

    name;
    description;

    constructor (name, description) {
        this.name = name;
        this.description = description;
    }

    sayHello (name) {
         console.log(`Hello, ${name}`);
    }

}

item1 = new Item("Jelo", "I am Item 1!");
item1.sayHello("Monica");
console.log("item1: ", item1);

item2 = new Item("ks", "I am Item 2!");
item2.sayHello("Chandler");
console.log("item2: ", item2);