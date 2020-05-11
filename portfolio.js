var open = document.getElementById("open");
var ham = document.getElementsByClassName("ham");

ham[0].addEventListener("click",myfunc1)

var a = 0;
function myfunc1(){
open.style.height = "190px"		
open.style.width = "auto"			
ham[0].innerHTML ="X"	
a++;

if(a%2 === 0){		
open.style.height ="0px"		
open.style.overflow ="hidden"		
ham[0].innerHTML ="&#9776"
		}
	}

