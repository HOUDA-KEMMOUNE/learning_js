import {players} from "./players.js";

// PART 1
export const	executeCallBack = (callback) =>
{
	callback();
};

export const	sayHello = () =>
{
	console.log("Hello Houda!");
};

// --------------------------------------------------------------

// PART 2
export const	executeWithPlayer = (player, callback) =>
{
	callback(player);
};

export const	printPlayer = (player) =>
{
	console.log(player.username);
}

//---------------------------------------------------------------

// PART 3
export const	getUsernames = (players, callback) =>
{
	const	usernames = players.map(callback);
	return (usernames);
}

export const	getUsernames_helper = ({username}) => username;

//------------------------------------------------------------

// PART 4
export const	getOnlinePlayers = (players, callback) =>
{
	const	onlinePlayers = players.filter(callback);
	return (onlinePlayers);
}

export const	getOnlinePlayers_helper = ({online}) => online;
//--------------------------------------------------------------------

// PART 5
export const	addBonus = (players, callback) =>
{
	const	add_points = players.map(callback);
	return (add_points);
}	

export const	addBonus_helper = (player) =>
{
	return {
		...player,
		score: player.score + 500
	};
}
//-----------------------------------------------------------

// PART 6
export const	getOnlineUsernames = (players, filter_callback, map_callback) =>
{
	const	online_users = players.filter(filter_callback);
	const	names = online_users.map(map_callback);
	return (names);
}

export const	filter_helper = ({online}) => online;
export const	map_helper = ({username}) => username;

//---------------------------------------------------------------

// PART 7
export const	getCities = (players, callback) =>
{
	const	cities = players.map(callback);
	return (cities);
}

export const	getCities_helper = ({ address: {city} }) => city;

//-----------------------------------------------------------------

// PART 8
export const	processPlayers = (players, callback) =>
{
	const	process_players = players.map(callback);
	return (process_players);
}

export const	getUsername = ({username}) => username;
export const	getScore = ({score}) => score;
