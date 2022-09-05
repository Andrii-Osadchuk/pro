const users = [
	["john","red",5,["ball", "book", "pen"]],
	["becky","blue",10,["tape", "backpack", "pen"]],
	["susy","red",55,["ball", "eraser", "pen"]],
	["tyson","green",1,["book", "pen"]],
];
// console.log(users);

const THEAD = ['Name', 'Comand', 'Score', 'Data'];

let newUsersEach = JSON.parse(JSON.stringify(users));
// console.log(newUsers);

newUsersEach.forEach(item => item[0]+='!');
// console.log(newUsersEach);

let newUsersMap = JSON.parse(JSON.stringify(users));

newUsersMap.map(item => item[0]+='?');
// console.log(newUsersMap);

let userRedTeam = users.filter(item => item[1] === 'red');
// console.log(userRedTeam); //	["john","red",5,["ball", "book", "pen"]],
							//	["susy","red",55,["ball", "eraser", "pen"]],

let getThead = THEAD
	.map(item => `<th>${item}</th>`)
	.join('');

let getBody = userRedTeam
	.map(user =>
		`<tr>${
		user.map(item => `<td>${item}</td>`).join('')
		}</tr>`).join('');
// console.log(getBody);

let getTotal = userRedTeam
	.map(item => item[2])
	.reduce((start, next) => start += next);

document.write(`<table>
	<thead>
		<tr>
   			${getThead}
		</tr>
	</thead>
	<tbody>
		${getBody}
	</tbody>
	<tfoot>
		<tr>
            <td colspan="4">Total score: ${getTotal}</td>
        </tr>
	</tfoot>
</table>`)
