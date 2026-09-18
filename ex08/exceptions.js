import {players} from "../ex07/callback-ex/players.js"

// EXERCISE 1
console.log("------------------ Exercise 1 ------------------");

const	number = 10;

try
{
	number = 12;
} catch (error)
{
	console.log("An error occurred:\n" ,error);
}

console.log("------------------------------------------------");

// EXERCISE 2
console.log("------------------ Exercise 2 ------------------");

const	checkAge = (age) =>
{
	if ( age < 0 )
		throw new Error("Invalid age");
	else if ( age >= 18 )
		return "Access granted";
	else
		return "Access denied";
}

console.log(checkAge(19));
console.log(checkAge(15));

try
{
	checkAge(-5);
}
catch (error)
{
	console.log(error.message);
}

console.log("------------------------------------------------");

// EXERCISE 3
console.log("------------------ Exercise 3 ------------------");

try
{
	console.log(checkAge(20));
}
catch (error)
{
	console.log(error.message);
}
finally
{
	console.log("Finished checking age");
}

console.log("------------------------------------------------");

// EXERCISE 4
console.log("------------------ Exercise 4 ------------------");

const	getPlayer = (players, username) =>
{
	let	flag = 0;

	const	player = players.find( (u) => u.username === username );

	if ( player === undefined )
		throw new Error("Player not found");

	return (player);
}

try
{
	const	player = getPlayer(players, "Yassine");
	console.log(player);
}
catch (error)
{
	console.log(error.message);
}

console.log("------------------------------------------------");

// EXERCISE 5
console.log("------------------ Exercise 5 ------------------");

const	getScores = (players) =>
{
	if ( !Array.isArray(players) )
		throw new Error("Players must be an array");

	const	_score = players.map(({score}) => score); 
	return	(_score);
}

try
{
	console.log(getScores("players"));
}
catch (error)
{
	console.log(error.message);
}

console.log("------------------------------------------------");

// EXERCISE 6
console.log("------------------ Exercise 6 ------------------");

const	processPlayer = (player, callback) =>
{

	if (!player || !player.username)
		throw new Error("Invalide user");

	return (callback(player));
}

const	obj = {id: 90, money: false};

try
{
	const	getUsername = ({username}) => username;
	const	result = processPlayer(null, getUsername);
	console.log(result);
}
catch (error)
{
	console.log(error.message);
}

console.log("------------------------------------------------");
