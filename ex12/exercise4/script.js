let	input = document.querySelector("#username");
let	button = document.querySelector("#btn");
let	paragraph = document.querySelector("#result");

const	submit = () =>
{
	paragraph.textContent = "Hello " + input.value + "!";
}

button.addEventListener("click", submit);
