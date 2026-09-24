const players = [
	{
		username: "Houda",
		score: 2000,
		online: true
	},
	{
		username: "Ali",
		score: 1500,
		online: false
	},
	{
		username: "Sara",
		score: 1800,
		online: true
	}
];

const	div = document.querySelector("#players");

const	displayPlayers = () =>
{
	const	ps = players.map( ({username, score}) => 
		{
			let	p;

			p = document.createElement("p");
			p.textContent = username + " - " + score;

			return p;
		});

	ps.forEach( (p) =>
	{
		div.appendChild(p);
	} );
}

displayPlayers();
