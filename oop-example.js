class Item {

    #name = "default name";
    #description = "default description";

    constructor () {
       console.log("In the constructor!");
    }

    sayHello (name) {
         console.log(`Hello, ${name}`);
    }

}

item1 = new Item();
item1.sayHello("Monica");
console.log(item1.#name);
console.log("item1: ", item1);

item2 = new Item();
item2.sayHello("Chandler");
console.log(item2.#description);
console.log("item2: ", item2);