class Item {
    name;
    description = "default description";

    sayHello (name) {
         console.log(`Hello, ${name}`);
    }

}

item1 = new Item();
item1.sayHello("Monica");
console.log("item1: ", item1);

item2 = new Item();
item2.name = "ks";
item2.sayHello("Chandler");
console.log("item2: ", item2);