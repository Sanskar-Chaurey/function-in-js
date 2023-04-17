let bread1 = prompt("which bread would you like to have:-");

let veggies1 = prompt("what are your favorite veggies");

let saucel = prompt("which sauce would you like to have");

function makeSandwich(bread, veggies, sauce) {
    let sandwich = bread + " bread " + veggies + " " + sauce + " sandwich is ready";
    return sandwich;
}

let vegSandwich = makeSandwich(bread1, veggies1, saucel);
console.log(vegSandwich);