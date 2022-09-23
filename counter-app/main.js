const add = document.getElementById('add-button')
const sub = document.getElementById('sub-button')
const num = document.getElementById('count-el')
let count = 0; //set var = 0

add.addEventListener("click", () => {
    count += 1 //whenever user clicks the count increments
    num.innerHTML = count //the h2 tag = num ... the innerHTML is updated by count
    console.log(num); //console logs num 
});

sub.addEventListener("click", () => {
    count -= 1 //whenever user clicks the count decrements
    num.innerHTML = count //the h2 tag = num ... the innerHTML is updated by count
    console.log(num); //console logs num 
});