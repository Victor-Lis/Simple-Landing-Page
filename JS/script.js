const myAge = document.getElementById("my-years-old")

var today = new Date();
var year = today.getFullYear();

function setAge(){

    myAge.innerText = `I'm ${year-2007} years old and I'm studding programming, this website is a someone of my projects, I intend to work more on the front end.`

}

setAge()