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
	
	document.write(`<table><caption>${title} info</caption>${trr.join('')}</table><br>`);
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
	
	document.write(`<table><caption>${title} info</caption>${trr.join('')}</table><br>`);
}

getInfo2(food, 'Food');

const getInfo3 = (list, listName) => {
	let trr = [];
	let title = listName;
	for(let i=0; i<list.length; i++){
		
		let listInner = [];
		let lastArr =[];
		if(Array.isArray(list[i])) {

			for(let y=0; y<list[i].length; y++) {
				
				if(Array.isArray(list[i][y])) {
					
					for(let x=0; x<list[i][y].length; x++){
						lastArr.push(`${list[i][y][x]}`);
					}
				}
				else {
					listInner += `<td>${list[i][y]}</td>`;
				}
			}
 		}
		trr.push(`<tr>${listInner}<td>${lastArr.join('; ')}</td></tr>`);
	}
	
	document.write(`<table><caption>${title} info</caption>${trr.join('')}</table><br>`);
}

getInfo3(universes, 'Universes');

