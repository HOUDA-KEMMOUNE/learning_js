const { reject } = require("async");

const	players =
[
	{
		username: "Houda",
		age: 21,
		score: 2000,
		online: true,
		friends: ["Ali", "Sara"]
	},
	{
		username: "Ali",
		age: 22,
		score: 1500,
		online: false,
		friends: ["Houda"]
	},
	{
		username: "Sara",
		age: 20,
		score: 1800,
		online: true,
		friends: ["Houda"]
	}
];

// PART 1
// ------------------------------------------------------------

const	getPlayer = (username) =>
{
	return	new Promise( (resolve, reject) => 
	{
		setTimeout( () =>
		{
			const	player = players.find( (user) => user.username === username );

			if ( player === undefined )
				reject(new Error("Player not found"));
			else
				resolve(player);

		}, 1000 );
	});
}

// PART 2
// ------------------------------------------------------------

const	checkOnlinePlayer = (player) =>
{
	return new Promise( () =>
	{

		if ( player.online )
			resolve("Player is online");
		else
			reject(new Error("Player is offline"));

	} );
}

getPlayer("Houda")
	.then( (player) =>
	{
		console.log(player);
		return player;
	} )
	.then( (player) =>
	{
		checkOnlinePlayer(player)
			.then( (onlineUser) =>
			{
				console.log(onlineUser);
			} )
			.catch( (e) =>
			{
				console.log(e.message);
			} )
	} )
	.catch( (e) =>
	{
		console.log(e.message);
	} )