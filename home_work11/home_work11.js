const products = [
	['apple',10],
	['banana',8],
	['mango',20],
	['grape',18]
]

const getPrice = (value, season) => {
	let totalPrice = arrPrice(value); //56
	let seasonCoef;
	if(season === undefined) seasonCoef = 1;
	else seasonCoef = season();// coef
	let totlaCost = (totalPrice * seasonCoef);
	// питання, чому значення виходить 44.80000000004, та як цього уникнути?
	// пробував другим способом вирішити це завдання, результат інший з кількістю знаків після крапки.
	// і який віріант більш вигідний чи зручний ?
	return totlaCost;												
}

const arrPrice = (value) => {
	let price = [];
	for(let i=0; i<value.length; i++) {
		price.push(value[i][1]);
	}
	price = sum(price);
	return price;
}

const sum = (value => {
	let total = 0;
	for(let i=0; i<value.length; i++){
		total += value[i];
	}
	return total;
});

const summerValue = (value => 0.8);
const winterValue = (value => 2);

console.log(getPrice(products, summerValue));
console.log(getPrice(products, winterValue));
console.log(getPrice(products));

// const getPrice = (products, seasonFunc) => {
// 	let copiedProducts = [];
// 	let seasonCoef;
// 	if(seasonFunc === undefined) seasonCoef = 1;
// 	else seasonCoef = seasonFunc();
// 	for(let i = 0; i<products.length; i++) {
// 		copiedProducts.push((products[i][1])*seasonCoef);
// 	}
// 	copiedProducts = calc(copiedProducts);
// 	return copiedProducts;
// };

// const calc = (copiedProducts) => {
// 	let calc = 0;
// 	for(let i=0; i<copiedProducts.length; i++) {
// 		calc += copiedProducts[i];
// 	}
// 	return calc;
// }

// const summerValue = (value => 0.8);

// const winterValue = (value => 2);

// console.log(`Total summer price: ${getPrice(products, summerValue)}`);
// console.log(`Total winter price: ${getPrice(products, winterValue)}`);
// console.log(`Total price: ${getPrice(products)}`);





