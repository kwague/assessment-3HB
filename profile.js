
const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');

function colorListener(evt) {
    alert("My color is olive green ");
}

function placeListener(evt) {
    alert("My favorite place is anywhere my family is ");
}

function ritualListener(evt) {
    alert("My most prized ritual is praying 5 times a day");
}


colorButton.classList.add('favorite'); 
placeButton.classList.add('favorite'); 
ritualButton.classList.add('favorite'); 



colorButton.addEventListener("click", colorListener);
placeButton.addEventListener("click", placeListener);
ritualButton.addEventListener("click", ritualListener);


