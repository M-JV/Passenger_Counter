// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

var count = 0;
var countEl = document.getElementById("count-el");
var saveEl = document.getElementById("save-el");

// Increment the count of passengers
function increment() {
    
    count++;
    countEl.textContent = count;
    
}

// Save the count of passengers
function save() {
    
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0; 

}

// Reset the app
function reset() {

    count = 0;
    countEl.textContent = count;
    saveEl.textContent = "Previous Enteries: ";

}




