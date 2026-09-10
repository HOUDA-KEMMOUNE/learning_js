// PART 1
console.log("----------- Part 1 ---------------");

function    multiply(a, b)
{
    return a * b;
}

const   result = multiply(5, 4);
console.log("Result => " + result);

console.log("----------------------------------");

// PART 2
console.log("----------- Part 2 ---------------");

function    createPlayer( username, score, online )
{
    return  {
        username: username,
        score: score,
        online: online
    };
}

const   player1 = createPlayer("Houda", 2000, true);

console.log(player1.username);
console.log(player1.score);
console.log(player1.online);
    
console.log("----------------------------------");

// PART 3
console.log("----------- Part 3 ---------------");

function    printNumbers( numbers )
{
    for ( let i = 0; i < numbers.length; i++ )
        console.log(numbers[i]);
}

const   numbers = [10, 20, 30, 40, 50];
printNumbers(numbers);

console.log("----------------------------------");

// PART 4
console.log("----------- Part 4 ---------------");

const   players = [
    {
        username: "Houda",
        score: 2000,
        online: true
    },
    {
        username: "Ali",
        score: 1500,
        online: true
    },
    {
        username: "Sara",
        score: 1800,
        online: true
    }
];

function    printPlayers( players )
{
    for ( let i = 0; i < players.length; i++ )
        console.log(players[i].username + " - " + players[i].score);
}

printPlayers(players);

console.log("----------------------------------");

// PART 5
console.log("----------- Part 5 ---------------");

function    findPlayer( players, username )
{
    for ( let i = 0; i < players.length; i++ )
    {
        if ( players[i].username === username )
            return players[i];
    }

    return null;
}

const   player = findPlayer(players, "Sara");
console.log(player);

console.log("----------------------------------");
