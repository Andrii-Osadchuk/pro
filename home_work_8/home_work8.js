let hero = ['Ivan'];
let native = ['York','Of'];
let destination = ['Poltava','In'];

let rainbow = destination.concat(native, hero).reverse();
rainbow.splice(0, 1, 'Richard');
rainbow.splice(3, 0, 'Gave', 'Battle');
rainbow.pop();
rainbow.push('Vain');

let trLine = [];

for(let td = 0; td<rainbow.length; td++){

    trLine.push(`<td>${rainbow[td]}</td>`)
}
document.write(`<table>
    ${trLine.join('')}
</table>`)

// пункт 4 по дз взагалі не зрозумів з кольоровими колами як і куди іх виводити