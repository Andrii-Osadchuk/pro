const hamburger = 20,
    cheeseburger = 30,
    doubleCheese = 5,
    potatoSmall = 10,
    potatoMiddle = 15,
    potatoBig = 20,
    sauceKetchup = 2,
    sauceMayonnaise = 3;
let totalCoast;

let whileMenuFirst = true;
let food;
do {

    food = prompt(`Would you like 'Cheeseburger' or 'Hamburger'?`);

    whileMenuFirst = true;

    if(food) {
        food = food.trim();
        food = food.toLowerCase();

        if(food === 'cheeseburger' || food === 'hamburger') whileMenuFirst = false;
    }
} while(whileMenuFirst)

let chooseMenuCheese;
// debugger;
if(food === 'cheeseburger') {

    chooseMenuCheese = confirm(`Would you like double cheese?`);git 
    if(chooseMenuCheese) {
        chooseMenuCheese === 'doubleCheese';
        totalCoast = ((cheeseburger + doubleCheese));
    } else {
        totalCoast = cheeseburger;
    }
} else totalCoast = hamburger;

let chooseMenuGarnish = confirm(`Would you like potato?`);

let potatoSize;

if(chooseMenuGarnish) {
  
    potatoSize = prompt(`Choose potato size: small/middle/big`);

    if(potatoSize) {
        potatoSize = potatoSize.trim();
        potatoSize = potatoSize.toLowerCase();
        if(potatoSize === 'big') totalCoast += potatoBig;
        else if(potatoSize === 'middle') totalCoast += potatoMiddle;
        else { 
            potatoSize = 'small';
            totalCoast += potatoSmall;
        }
    } else {
        potatoSize = 'small';
        totalCoast += potatoSmall;
    }  
}

let chooseMenuSauce = confirm(`Would you like sauce?`);

let sauce;

if(chooseMenuSauce) {
  
    sauce = prompt(`Choose sauce: ketchup / mayonnaise(or push number '2')`);

    if(sauce) {
        sauce = sauce.trim();
        sauce = sauce.toLowerCase();
        if(sauce === 'mayonnaise' || sauce == '2') {
            // sauce = `mayonnaise`;
            totalCoast += sauceMayonnaise;
        } else {
            sauce = `ketchup`;
            totalCoast += sauceKetchup;
        }
    } else {
        sauce = `ketchup`;
        totalCoast += sauceKetchup;
    }
}

document.write(`<h1 style = 'color: rgb(150,0,0)'> MENU </h1>
<h2 style = 'color: rgb(0,255,0'> Fast Food </h2>`);

document.write(`<h3 style = 'color: rgb(0,0,255')> Your order: </h3>
<ul>
    ${food === 'cheeseburger' ? `<li> Bulka 🍔: Cheeseburger - ${cheeseburger} $</li>` : ''}
    ${food === 'hamburger' ? `<li> Bulka 🍔: Hamburger - ${hamburger} $</li>` : ''}
    ${chooseMenuCheese ? `<li>   + double Cheese 🧀🧀 - ${doubleCheese} $</li>` : ''}
    ${potatoSize === 'small' ? `<li> Potato 🍟: Small size - ${potatoSmall} $</li>` : ''}
    ${potatoSize === 'middle' ? `<li> Potato 🍟: Middle size - ${potatoMiddle} $</li>` : ''}
    ${potatoSize === 'big' ? `<li> Potato 🍟: Big size - ${potatoBig} $</li>` : ''}
    ${sauce === 'mayonnaise' || sauce == '2' ? `<li> Sauce 🧂: Mayonnaise - ${sauceMayonnaise} $</li>` : ''}
    ${sauce === `ketchup`? `<li> Sauce 🧂: Ketchup - ${sauceKetchup} $</li>` : ''}
</ul>

<p style = 'color: rgb(255,0,0)'> Total price: ${totalCoast} $ </p>
`)

