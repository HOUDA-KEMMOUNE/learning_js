const	players = 
[
	{
		username: "Houda",
		age: 19,
		score: 2000,
		online: true,
		friends: ["Ali", "Sara"],
		address: 
		{
			city: "Benguerir",
			country: "Morocco"
		}
	},
	{
		username: "Ali",
		age: 21,
		score: 1500,
		online: false,
		friends: ["Houda"],
		address:
		{
			city: "Marrakech",
			country: "Morocco"
		}
	},
	{
		username: "Sara",
		age: 20,
		score: 1800,
		online: true,
		friends: ["Houda", "Ali"],
		address:
		{
			city: "Casablanca",
			country: "Morocco"
		}
	}
];

// PART 1
console.log("-------------------- Part 1 -------------------");

const	[{username, age, score, online}] = players;
console.log(username + " " + age + " " + score + " " + online);

console.log("-----------------------------------------------");

// PART 2
console.log("-------------------- Part 2 -------------------");

const	[{address: {city, country}}] = players;
console.log(city + " " + country); 

console.log("-----------------------------------------------");

// PART 3
console.log("-------------------- Part 3 -------------------");

const	[{ friends: [first, second] }] = players;
console.log(first + " " + second); 

console.log("-----------------------------------------------");

// PART 4
console.log("-------------------- Part 4 -------------------");

const	printPlayer = ([{username, score}]) =>
{
	console.log(username + " - " + score + " points");
}

printPlayer(players);

console.log("-----------------------------------------------");

// PART 5
console.log("-------------------- Part 5 -------------------");

const	getUsernames = ({username}) =>
{
	const	names = players.map( ({username}) => username);
	return (names);
}

const	usernames = getUsernames(players);
console.log(usernames);

console.log("-----------------------------------------------");

// PART 6
console.log("-------------------- Part 6 -------------------");

const	getOnlinePlayers = ({online}) =>
{
	const	onlinePlayers = players.filter( ({online}) => online === true );
	return (onlinePlayers);
}

const	onlinePlayers = getOnlinePlayers(players);
console.log(onlinePlayers);

console.log("-----------------------------------------------");

// PART 7
console.log("-------------------- Part 7 -------------------");

const	getOnlineUsernames = ({username, online}) =>
{
	const	OP = players.filter( ({online}) => online === true );
	const	usernames = OP.map( ({username}) => username);

	return (usernames);
}

const	Users = getOnlineUsernames(players);
console.log(Users);

console.log("-----------------------------------------------");
