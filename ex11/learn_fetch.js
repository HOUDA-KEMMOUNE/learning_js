async function main()
{
	try
	{
		const	response = await fetch("https://jsonplaceholder.typicode.com/users");

		if ( !response.ok )
			throw new Error("Error: " + response.status);

		const	users = await response.json();

		const	usernames = users.map( ({name: username}) => username);
		console.log(usernames);
	}
	catch(e)
	{
		console.log(e.message);
	}
}

await	main();

const	getUserById = (users, id) =>
{
	const	u = users.find( (user) => user.id === id );
	return (u);
}

const	getUsernames = (users) =>
{
	const	usernames = users.map( ({username}) => username );
	return (usernames);
}

const	getUser = async (id) =>
{
	try
	{
		const	response = await fetch("https://jsonplaceholder.typicode.com/users");
		
		if ( !response.ok )
			throw new Error("Error: " + response.status);

		const	users = await response.json();
		const	user = getUserById(users, id);

		return (user);
	}
	catch(e)
	{
		console.log(e.message);
	}
}

const	user = await getUser(7);
console.log("----------------------------------------------------");
console.log(user);
console.log("----------------------------------------------------");

const	[user1, user2, user3] = await Promise.all(
	[
		getUser(8),
		getUser(2),
		getUser(9)
	]
);

console.log("user1: ", user1.name);
console.log("user2: ", user2.name);
console.log("user3: ", user3.name);