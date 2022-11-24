




 



$("#title").css("background-color","red")

//var dispelementById = $("#displayEl");


//var title = $("title");

var h1 = document.getElementById("title");
console.log(h1);
h1.innerHTML = "Calculator";



 

var x = 0   //the value that is taken from the text bar 
 

 


$("#Fivepercent").click(function() {

     var x = $("#textBox").val(); 
     x = x * 0.05 ;

      displayEl.innerHTML = "£" + x; 
   });


   

$("#tenPercent").click(function() {

    var x = $("#textBox").val(); 
    x = x * 0.1 ;

     displayEl.innerHTML = "£" + x; 
  });

 

 
$("#twentyfivePercent").click(function() {

    var x = $("#textBox").val(); 
    x = x * 0.25 ;

     displayEl.innerHTML = "£" + x; 
  });




$("#twentfiveORpercent").click(function() {
 

    var x = $("#textBox").val(); 
    var y = Math.floor((Math.random() * 2) + 1);
    
    
    if (y == 1){

        x = x * 0.25;
    }
    else if (y == 2){

        x = (x * 0.1) + 2 
    }
    

    displayEl.innerHTML = "£" + x; 
});



