const   players = 
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
        address: {
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
        address: {
            city: "Casablanca",
            country: "Morocco"
        }
	}
];

// PART 1
console.log("-------------------- Part 1 ---------------------");

const	playersCopy = [...players];
console.log(playersCopy);

console.log("-------------------------------------------------");

// PART 2
console.log("-------------------- Part 2 ---------------------");

const	updatedPlayers = 
[
	...players,
	{
		username: "Yassine",
		age: 22,
		score: 1700,
		online: true
	}
];

console.log(updatedPlayers);

console.log("-------------------------------------------------");

// PART 3
console.log("-------------------- Part 3 ---------------------");

const	houda = players[0];

const	updatedHouda = {
	...houda,
	score: 2500,
	online: false
};

console.log(updatedHouda);

console.log("-------------------------------------------------");

// PART 4
console.log("-------------------- Part 4 ---------------------");

const	[firstPlayer] = players;
const	{username, score, friends} = firstPlayer;

const	newFriends = [...friends, "Yassine"];
console.log(newFriends);

console.log("-------------------------------------------------");

// PART 5
console.log("-------------------- Part 5 ---------------------");

const	printPlayers = ({username, score, online}) =>
{
	let	status;

	if ( online )
		status = "online";
	else
		status = "offline";

	console.log(username + " - " + score + " points - " + status);
}

players.forEach( (element) => printPlayers(element) );

console.log("-------------------------------------------------");

// PART 6
console.log("-------------------- Part 6 ---------------------");

const	getUsernames = ({username}) =>
{
	const	usernames = players.map( ({username}) => username );
	return (usernames);
}

const	usernames = getUsernames(players);
console.log(usernames);

console.log("-------------------------------------------------");

// PART 7
console.log("-------------------- Part 7 ---------------------");

const	getOnlinePlayers = ({online}) =>
{
	const	onlinePlayers = players.filter( ({online}) => online === true );
	return (onlinePlayers);
}

const	onlinePlayers = getOnlinePlayers(players);
console.log(onlinePlayers);

console.log("-------------------------------------------------");

// PART 8
console.log("-------------------- Part 8 ---------------------");

const	getOnlineUsernames = ({username, online}) =>
{
	const	onlinePlayers = players.filter( ({online}) => online === true );
	const	names = onlinePlayers.map( ({username}) => username );

	return (names);
}

const	onlinePlayersNames = getOnlineUsernames(players);
console.log(onlinePlayersNames);

console.log("-------------------------------------------------");

// PART 9
console.log("-------------------- Part 9 ---------------------");

const	addBonus = (players) =>
{
	return players.map( (player) => {
		return {
			...player,
			score: player.score 
		};
	} );
}

console.log(addBonus(players));

console.log("-------------------------------------------------");
