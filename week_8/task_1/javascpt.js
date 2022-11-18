

var title = document.getElementById("title");
var displayEl = document.getElementById("displayEl");


console.log(title);

title.innerHTML = "Calculator";
title.classList.add("red_background");

var x = 0   //the value that is taken from the text bar 
 

let billValue = document.getElementById("myInputBox").value;


 

 
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


function twentfiveORpercent(){

    var x = document.getElementById("textBox").value; 
    var y = Math.floor((Math.random() * 2) + 1);
    
    
    if (y == 1){

        x = x * 0.25;
    }
    else if (y == 2){

        x = (x * 0.1) + 2 
    }
    

    displayEl.innerHTML = "£" + x; 
}



