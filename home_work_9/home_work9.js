const sports = [
	['skier','⛷'],
	['snowboarder','🏂'],
	['apple','🍎'],
	['hockey','🏒'],
	['ice skate','⛸'],
	['swimmer','🏊'],
	['surfer','🏄‍'],
	['watermelon','🍉'],
	['lemon','🍋'],
	['rowboat','🚣'],
	['bicyclist','🚴‍']
];

let winterSports = sports.slice(0, 5);
let summerSports = sports.slice(5);

let fruits = winterSports.splice(2, 1);
fruits = fruits.concat(summerSports.splice(2, 2));

let winterFinal = ``;
for(let winter = 0; winter<winterSports.length; winter++) {
    winterFinal += `<li>${winterSports[winter].join(`: `)}</li>`;
}

let summerFinal = ``;
for(let summer = 0; summer<summerSports.length; summer++) {
    summerFinal += `<li>${summerSports[summer].join(`: `)}</li>`;
}

let fruitsFinal = ``;
for(let frut = 0; frut<fruits.length; frut++) {
    fruitsFinal += `<li>${fruits[frut].join(`: `)}</li>`;
}

let titleVariables = [
    `<li>*** Winter sports ***</li>`
    , `<li>*** Summer sports ***</li>`
    , `<li>*** Fruits ***</li>`];

document.write(`<ul>
    ${titleVariables[0]}
    ${winterFinal}
</ul>
<br>
<ul>
    ${titleVariables[1]}
    ${summerFinal}
</ul>
<br>
<ul>
    ${titleVariables[2]}
    ${fruitsFinal}
</ul>    
`)