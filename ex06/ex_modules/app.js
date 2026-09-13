import {players} from "./players.js";
// import { getUsernames, getOnlinePlayers, getPlayerInfo, addBonus } from "./playerFunctions.js";
import * as playerFunctions from "./playerFunctions.js";

console.log(playerFunctions.getUsernames(players));
console.log("_____________________________________");
console.log(playerFunctions.getOnlinePlayers(players));
console.log("_____________________________________");
console.log(playerFunctions.getPlayerInfo(players));
console.log("_____________________________________");
console.log(playerFunctions.addBonus(players));
console.log("_____________________________________");
console.log(playerFunctions.getOnlineUsernames(players));
