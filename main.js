let btn  = document.getElementById("btn");
let input = document.getElementById("input");
let output = document.getElementById("output");

btn.addEventListener('click',function(){
	
	let inputValue = document.getElementById("input").value;
	output.innerHTML = inputValue.length;
	
	
})