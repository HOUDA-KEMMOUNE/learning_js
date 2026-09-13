import { players } from "./players.js";

export const	getUsernames = (players) =>
{
	const   usernames = players.map( ({username}) => username );
	return (usernames);
}

export const    getOnlinePlayers = (players) =>
{
	const   onlinePlayers = players.filter( ({online}) => online );
	return (onlinePlayers);
}

export const	addBonus = (players) =>
{
	const	addScore = players.map( (player) => {
		return {
			...player,
			score: player.score + 500
		}
	} );

	return (addScore);
}

export const	getPlayerInfo = ( players ) =>
{
	const	playerInfo = players.map( ({ username, score, address: {city} }) => 
		{
			return username + " - " + score + " points - " + city;
		} 
	);

	return (playerInfo);
}

export const	getOnlineUsernames = (players) =>
{
	const	onlineUsers = players.filter( ({online}) => online );
	const	names = onlineUsers.map( ({username}) => username );
	
	return (names);
}

