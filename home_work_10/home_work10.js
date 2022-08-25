const animals = [1,
	['🐭','mouse','Jerry'],
	['🐹','hamster','Biscuit'],
	['🐰','rabbit','Bugs'],
	['🦊','fox','Mrs. Fox'],
	['🐻','bear','Paddington']
];

const food = [
	['🍎','apple',10],
	['🍐','pear',12],
	['🍊','tangerine',15],
	['🍋','lemon',5],
	['🍌','banana',7]
];

const universes = [
	['🖤', 'DC', ['Superman', 'Batman', 'Wonder Woman']],
	['❤️', 'Marvel', ['Iron Man', 'the Hulk', 'Black Widow']]
];

const getInfo = (list, listName) => {
	let trr = [];
	let title = listName;
	for(let i=0; i<list.length; i++){
		
		let listInner = [];

		if(Array.isArray(list[i])) {
			
			for(let y=0; y<list[i].length; y++) {
				listInner += `<td>${list[i][y]}</td>`;
			}
		}
		// console.log(listInner);
		trr.push(`<tr>${listInner}</tr>`);
		// console.log(trr);
	}
	
	document.write(`<div>${title} info</div><table>${trr.join('')}</table><br>`);
}

getInfo(animals, 'Animals');

const getInfo2 = (list, listName) => {
	let trr = [];
	let title = listName;
	for(let i=0; i<list.length; i++){
		
		let listInner = [];

		if(Array.isArray(list[i])) {
			
			for(let y=0; y<list[i].length; y++) {
				listInner += `<td>${list[i][y]}</td>`;
			}
		}
		trr.push(`<tr>${listInner}</tr>`);
	}
	
	document.write(`<div>${title} info</div><table>${trr.join('')}</table><br>`);
}

getInfo2(food, 'Food');

const getInfo3 = (list, listName) => {
	let trr = [];
	let title = listName;
	for(let i=0; i<list.length; i++){
		
		let listInner = [];

		if(Array.isArray(list[i])) {
			
			for(let y=0; y<list[i].length; y++) {
				listInner += `<td>${list[i][y]}</td>`;
			}
		}
		trr.push(`<tr>${listInner}</tr>`);
	}
	
	document.write(`<div>${title} info</div><table>${trr.join('')}</table><br>`);
}

getInfo3(universes, 'Universes');

