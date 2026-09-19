const	players = 
[
	{
		username: "Houda",
		age: 21,
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
		age: 20,
		score: 1800,
		online: true
	}
];

// PART 1
const	getPlayer = ( username ) => {

	return	new Promise( (resolve, reject) => {

			let		player;

			setTimeout( () => {

				player = players.find( (user) => user.username === username );

				if (!player || player === undefined)
					reject( new Error("Player not found") );

				resolve(player);

			}, 1000 );
	});
}

//------------------------------------------------------------------------------

// PART 2

getPlayer("Houda")
	.then( ({username, score}) => 
		{
			console.log("Username: ", username);
			console.log("Score: ", score);
			console.log("--------------------------------------------");
		})
	.catch( (error) => 
		{
			console.log(error.message);
			console.log("--------------------------------------------");
		});

//------------------------------------------------------------------------------

// PART 3

getPlayer("Bob")
	.then( ({username, score}) => 
	{
		console.log("Username: ", username);
		console.log("Score: ", score);
		console.log("--------------------------------------------");
	})
	.catch( (error) => 
	{
		console.log(error.message);
		console.log("--------------------------------------------");
	});

//------------------------------------------------------------------------------

// PART 4

getPlayer("Houda")
	.then( (player) => 
	{
		const	newPlayer = 
		{
			...player,
			score: player.score + 500 
		};

		console.log(newPlayer);
		console.log("--------------------------------------------");
	} )
	.catch( (error) => 
	{
		console.log(error.message);
		console.log("--------------------------------------------");
	})

//------------------------------------------------------------------------------

// PART 5

const	checkOnline = (player) =>
{
	return	new Promise( (resolve, reject) => 
		{

			if ( player.online )
				resolve("Player is online");
			else
				reject( new Error("Player is offline") );

		});
}

getPlayer("Ali")
	.then( (player) =>
	{
		const	{username, score} = player;

		console.log("Username: ", username);
		console.log("Score: ", score);

		return (player);
	} )
	.then( (player) =>
	{
		return {
			...player, score: player.score + 500
		};
	} )
	.then( (newPlayer) => 
	{
		console.log(newPlayer);

		checkOnline(newPlayer)
			.then( (result) =>
			{
				console.log(result);
				console.log("--------------------------------------------");
			} )
			.catch( (error) =>
			{
				console.log(error.message);
				console.log("--------------------------------------------");
			} );
	})
	.catch( (error) => 
	{
		console.log(error.message);
		console.log("--------------------------------------------");
	});

//------------------------------------------------------------------------------

// PART 6

const	processPlayer = (username, callback) =>
{
	getPlayer(username)
		.then( (player) =>
		{
			const	{username, score} = player;

			console.log("Username: ", username);
			console.log("Score: ", score);

			return  (player);
		} )
		.then( (player) =>
		{
			return {
				...player,
				score: player.score + 500
			};
		})
		.then( (newPlayer) =>
		{
			console.log("New update of the player: ");
			console.log(newPlayer);
			callback(newPlayer);
		})
		.catch( (error) =>
		{
			console.log(error.message);
		})
}

const getPlayerInfo = ({ username, score }) => 
{
    return `${username} has ${score} points`;
};

processPlayer("Houda", getPlayerInfo);


