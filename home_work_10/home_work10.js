const animals = [
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
	let listInner = [];
	let title = listName;
	for(let i=0; i<list.length; i++){

		if(Array.isArray(list[i])) {
			
			for(let y=0; y<list[i].length; y++) {
				listInner += `<td>${list[i][y]}</td>`;
			}
		}

		trr.push(`<tr>${listInner}</tr>`);
	}
	
	document.write(`<caption>${title} info</caption><table>${trr.join(``)}</table>`);
}

getInfo(animals, 'Animals');
