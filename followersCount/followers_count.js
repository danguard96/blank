let count = 0;

function increaseCount() {
    count++; //Increase the count by 1
    displayCount(); //Display current count
    checkCountValue(); //Check current count value and display messages
}

function resetCount() {
    count = 0; //Reset count to 0
    displayCount(); //Display current count
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count == 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count == 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}