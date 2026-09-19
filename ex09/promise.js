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

// getPlayer("Houda")
// 	.then( () )

