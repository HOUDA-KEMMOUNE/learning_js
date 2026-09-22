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
	return new Promise( (resolve, reject) =>
	{

		if ( player.online )
			resolve("Player is online");
		else
			reject(new Error("Player is offline"));

	} );
}

// PART 3
// ------------------------------------------------------------

const	processPlayer = async (username) =>
{
	try
	{
		const	player = await getPlayer(username);

		const	{username: user_name, score} = player;

		console.log("Username: ", user_name, "\nScore: ", score);		

		const	newPlayer = {
			...player,
			score: score + 500
		};

		const	check_online = await checkOnlinePlayer(newPlayer);
		console.log( check_online );

	}
	catch (error)
	{
		console.log(error.message);
	}
}

// PART 4
// ------------------------------------------------------------

const	getOnlinePlayers = async (players) =>
{
	try
	{
		let	get_players = [];

		for ( let i = 0; i < players.length; i++ )
		{
			get_players[i] = await getPlayer(players[i].username);
		}

		const	online_players = get_players.filter( ({online}) => online);

		return (online_players);
	}
	catch(e)
	{
		console.log(e.message);
	}
}

const	online_players = await getOnlinePlayers(players);
const	names = online_players.map( ({username}) => username );
console.log(names);
console.log("----------------------------------------------------");

// PART 5
// ------------------------------------------------------------

const	processPlayers = async (players) =>
{
	try
	{
		const	online_players = await getOnlinePlayers(players);

		const	new_players = online_players.map( (player) =>
		{
			return {
				...player,
				score: player.score + 500
			};

		} );

		return new_players;
	}
	catch(e)
	{
		console.log(e.message)
	}
}

const	process_players = await processPlayers(players);
console.log(process_players);
console.log("----------------------------------------------------");

// PART 6
// ------------------------------------------------------------
async function	main()
{
	try
	{
		await processPlayer("Houda");

		console.log("********************************");

		const	process_Players = await processPlayers(players);
		console.log(process_Players);
	}
	catch(e)
	{
		console.log(e.message);
	}
}

await main();
console.log("----------------------------------------------------");
