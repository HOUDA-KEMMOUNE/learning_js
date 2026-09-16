import	{players} from "./players.js";
import * as playerFunctions from "./playerFunctions.js";

console.log("---------------- Part 1 ---------------");
playerFunctions.executeCallBack(playerFunctions.sayHello);
console.log("---------------------------------------");

console.log("---------------- Part 2 ---------------");
playerFunctions.executeWithPlayer(players[0], playerFunctions.printPlayer);
console.log("---------------------------------------");

console.log("---------------- Part 3 ---------------");
console.log(playerFunctions.getUsernames(players, playerFunctions.getUsernames_helper));
console.log("---------------------------------------");

console.log("---------------- Part 4 ---------------");
console.log(playerFunctions.getOnlinePlayers(players, playerFunctions.getOnlinePlayers_helper));
console.log("---------------------------------------");

console.log("---------------- Part 5 ---------------");
console.log(playerFunctions.addBonus(players, playerFunctions.addBonus_helper));
console.log("---------------------------------------");

console.log("---------------- Part 6 ---------------");
console.log(playerFunctions.getOnlineUsernames(players, playerFunctions.filter_helper, playerFunctions.map_helper));
console.log("---------------------------------------");

console.log("---------------- Part 7 ---------------");
console.log(playerFunctions.getCities(players, playerFunctions.getCities_helper));
console.log("---------------------------------------");

console.log("---------------- Part 8 ---------------");
console.log(playerFunctions.processPlayers(players, playerFunctions.getUsername));
console.log(playerFunctions.processPlayers(players, playerFunctions.getScore));
console.log("---------------------------------------");
