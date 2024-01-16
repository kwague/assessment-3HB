console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("We have successfully received your contact information");
}

function handleMouseover(evt) {
	
	alert('No one is better than you!')
}

let form = document.querySelector('#contact');
let photo = document.querySelector('#main-photo'); 

form.addEventListener('submit', handleSubmit);

photo.addEventListener('mouseover',handleMouseover);