let storage = {
    max: 1000,
    items: []
}

function getUsed() {
    let currentWeight = 0;
    for (const i = 0; i < storage.length; i++) {
        currentWeight += storage.items[i].weigth;
    }

    return currentWeight;
}

function add(item) {
    if (getUsed() + item.weight <= storage.max) {
        storage.items.push(item);
    }
}

add({ weight: 300 });
add({ weight: 500 });
add({ weight: 700 });

console.log(storage);
console.log(getUsed());
