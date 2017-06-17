function reversal(text) 
{
	var reversed = text.split('').reverse().join("");
	output.innerHTML = reversed;
}

function alphabits(text) 
{
	output.innerHTML += `<br>` + text.split('').sort().join('');
}

function palindrome(text) 
{
	var newText = text.split('').reverse().join('');
	if(text === newText)
	{
		output.innerHTML += '<br> your text is a palindrome'; 
	}
	else
	{
		output.innerHTML += '<br> your text is not a palindrome';
	}
}


var output  = document.getElementById('output');
var stringy = document.getElementById('stringAcceptor');
stringy.addEventListener("keypress", function()
{
	if(event.keyCode>=48 && event.keyCode<=57)
	{
		event.preventDefault();
	}
	if(event.keyCode === 13)
	{
		btn.click();
	}
})
var btn = document.getElementById('submit');
btn.addEventListener("click",function()
{
	var text = document.getElementById('stringAcceptor').value;
	console.log(text);

	reversal(text);
	alphabits(text);
	palindrome(text);
})
