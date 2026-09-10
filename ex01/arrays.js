// PART 1
console.log("---------- Part 1 -----------");

const	games = ["Pong", "Chess", "Tetris", "Pacman"];

console.log("The first game -> " + games[0]);
console.log("The last game -> " + games[games.length - 1]);
console.log("The length of games -> " + games.length);

games.push("Street Fighter");
games.pop;

games[1] = "Tennis";
console.log(games);

console.log("----------------------------");

// PART 2
console.log("---------- Part 2 -----------");

const	players = [
	{
		username: "Houda",
		age: 19,
		score: 2000,
		online: true
	},
	{
		username: "Ali",
		age: 22,
		score: 1500,
		online: false
	},
	{
		username: "Sara",
		age: 27,
		score: 500,
		online: true
	}
];

console.log(players[0].username);
console.log("Ali's score -> " + players[1].score);

players[2].score = 2500;
players[1].online = false;

players.push( { username: "Youssef", age: 21, score: 1700, online: false } );
console.log("We have " + players.length + " players");

for ( let i = 0; i < players.length; i++ )
{
	console.log(players[i].username + " - " + players[i].score);
}
console.log("----------------------------");

// PART 3
console.log("---------- Part 3 -----------");

const tournaments = [
	{
		name: "tournament 1",
		game: "League of legends",
		players: [
			{
				username: "Houda",
				age: 19,
				score: 2000,
				online: true
			},
			{
				username: "Ali",
				age: 22,
				score: 1500,
				online: true
			},
			{
				username: "Sara",
				age: 27,
				score: 500,
				online: true
			}
		]
	},
	{
		name: "tournament 2",
		game: "Valorant",
		players: [
			{
				username: "John",
				age: 18,
				score: 1790,
				online: true
			},
			{
				username: "Rozy",
				age: 28,
				score: 2387,
				online: true
			},
			{
				username: "Lucy",
				age: 30,
				score: 5600,
				online: true
			}
		]
	}
];	

console.log("The first player's name in the first tournament -> " + tournaments[1].players[2].username);

console.log("----------------------------");
