const   players = 
[
    {
        username: "Houda",
        score: 2000
    },
    {
        username: "Ali",
        score: 1500
    },
    {
        username: "Sara",
        score: 1800
    }
];

let   container = document.querySelector("#container");

const   printPlayers = () =>
{
    const   ps = players.map( ({username, score}) =>
    {
        let p;

        p = document.createElement("p");
        console.log("test");
        p.textContent = username + " - " + score;

        return p;
    } );

    ps.forEach( (p) => 
    {
        container.appendChild(p);
    } );
}

printPlayers();

let   username_input = document.querySelector("#username");
let   score_input = document.querySelector("#score");
let   button = document.querySelector("#btn");

const   addPlayer = () =>
{
    // if ( !username_input.textContent || !score_input.textContent )
    //     return;

    console.log("name: ", username_input.value);
    console.log("score: ", score_input.value);

    players.push({
        username: username_input.value,
        score: Number(score_input.value)
    });

    console.log(players);

    let p;
    let last = players.length - 1;

    p = document.createElement("p");
    p.textContent = players[last].username + " - " + players[last].score;

    container.appendChild(p);
}

button.addEventListener("click", addPlayer);