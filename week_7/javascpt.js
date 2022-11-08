

var title = document.getElementById("title");
var displayEl = document.getElementById("displayEl");


console.log(title);

title.innerHTML = "Calculator";
title.classList.add("red_background");

var x = 0   //the value that is taken from the text bar 
 



 
    

 
function tenPercent(){

    var x = document.getElementById("textBox").value; 
    x = x * 0.1 ;

    displayEl.innerHTML = "£" + x; 
}

 
function twentyfivePercent(){

    var x = document.getElementById("textBox").value; 
    x = x * 0.25 ;

    displayEl.innerHTML = "£" + x; 
}


function Fivepercent(){

    var x = document.getElementById("textBox").value; 
    x = x * 0.05 ;

    displayEl.innerHTML = "£" + x; 
}