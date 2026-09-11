// PART 1
console.log("--------------- Part 1 --------------");

const	subtract = (a, b) => a - b;
console.log(subtract(10, 3));

const	isEven = (number) =>
{
	if ( number % 2 === 0 )
		return true;
	else
		return false;
}

console.log(isEven(10));
console.log(isEven(7));

console.log("-------------------------------------");

// PART 2
console.log("--------------- Part 2 --------------");

const	numbers = [1, 2, 3, 4, 5];

const	doubleNumbers = numbers.map( (element) => element * 2 );

console.log(doubleNumbers);

console.log("-------------------------------------");

// PART 3
console.log("--------------- Part 3 --------------");

const	players = [
	{
		username: "Houda",
		score: 2000,
		online: true
	},
	{
		username: "Ali",
		score: 1500,
		online: false
	},
	{
		username: "Sara",
		score: 1800,
		online: true
	}
];

const	getUsernames = ( players ) =>
{
	const	usernames = players.map( (element) => element.username );
	return (usernames);
}


const	usernames = getUsernames(players);
console.log(usernames);

console.log("-------------------------------------");

// PART 4
console.log("--------------- Part 4 --------------");

const	getScores = ( players ) =>
{
	const	scores = players.map( element => element.score );
	return (scores);
}

const	scores = getScores(players);
console.log(scores);


console.log("-------------------------------------");


// PART 5
console.log("--------------- Part 5 --------------");

const	getOnlinePlayers = (players) =>
{
	const	onlinePlayers = players.filter( element => element.online === true );
	return (onlinePlayers);
}

const	onlinePlayers = getOnlinePlayers(players);
console.log(onlinePlayers);

console.log("-------------------------------------");

// PART 6
console.log("--------------- Part 6 --------------");

const	getPlayerInfo = (players) =>
{
	const	playerInfo = players.map( (element) => 
		element.username + " has " + element.score + " points"
	);

	return (playerInfo);
}

const	playerInfo = getPlayerInfo(players);
console.log(playerInfo);

console.log("-------------------------------------");
