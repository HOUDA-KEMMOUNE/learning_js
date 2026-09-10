const	player = 
{
	username: "Houda",
	age: 19,
	score: 100,
	online: true,
	country: "",
	friends: [],

	sayHello()
	{
		console.log("Hello, my name " + this.username);
	},

	address: {
		city: "Casablanca",
		country: "Morocco"
	}
};

console.log("the player's username " + player.username);
console.log("the player's score " + player.score);

player.score = 2000;
console.log("the player's score " + player.score);

player.level = 10;
console.log("the player's level " + player.level);

player.online = false;
console.log("the player's online " + player.online);

player.sayHello();

console.log(player.address.city);

player.friends[0] = "Ali";
player.friends[1] = "Sara";
player.friends[2] = "Youssef";
console.log("The second friend is: " + player.friends[1]);

const	players = [
	{
		username: "Houda",
		score: 2000
	},
	{
		username: "Ali",
		score: 1500
	},
	{
		username: "Sara",
		score: 1800
	}
];

for( let i = 0; i < 3; i++ )
{
	console.log(players[i].username + " " + players[i].score);
}
