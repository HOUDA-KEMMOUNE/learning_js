let	counter = document.querySelector("#counter");
let	plus = document.querySelector("#increment");
let	minus = document.querySelector("#decrement");

let	count = counter.textContent;

console.log(count);

function	increment()
{	
	count++;
	counter.textContent = count;
}

function	decrement()
{
	if ( count > 0 )
	{
		count--;
		counter.textContent = count;
	}
}


plus.addEventListener("click", increment);
minus.addEventListener("click", decrement);

