import {players} from "./players.js";

// PART 1
console.log("---------------- Part 1 ---------------");

const	executeCallBack = (callback) =>
{
	callback();
};

const	sayHello = () =>
{
	console.log("Hello Houda!");
};

executeCallBack(sayHello);

console.log("---------------------------------------");

// PART 2
console.log("---------------- Part 2 ---------------");

const	executeWithPlayer = (player, callback) =>
{
	callback(player);
};

const	printPlayer = (player) =>
{
	console.log(player.username);
}

executeWithPlayer(players[0], printPlayer);

console.log("---------------------------------------");

// PART 3
console.log("---------------- Part 3 ---------------");

const	getUsernames = (players, callback) =>
{
	const	usernames = players.map(callback);
	return (usernames);
}

const	helper = ({username}) => username;

console.log(getUsernames(players, helper));

console.log("---------------------------------------");
