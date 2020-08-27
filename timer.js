var seconds = 1500;
console.log("Hey I am working");
function getTimeInMinutes() {
    document.getElementById("mins").innerHTML = seconds / 60;
    console.log("Mins working");
}

function getTimeInSeconds() {
    document.getElementById("secs").innerHTML = seconds % 60;
    console.log("Secs working");
}

getTimeInMinutes();
getTimeInSeconds();