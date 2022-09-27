let step1 = document.getElementById("step1");
let stepBrd1 = document.getElementById("stepBrd1");

let step2 = document.getElementById("step2");
let stepBrd2 = document.getElementById("stepBrd2");

let step3 = document.getElementById("step3");
let stepBrd3 = document.getElementById("stepBrd3");

step1.onmouseover = function(){
    stepBrd1.style.borderBottom = "3px solid white"; 
}
step1.onmouseout = function(){
    stepBrd1.style.borderBottom = "3px solid black"; 
}


step2.onmouseover = function(){
    stepBrd2.style.borderBottom = "3px solid white"; 
}
step2.onmouseout = function(){
    stepBrd2.style.borderBottom = "3px solid black"; 
}

step3.onmouseover = function(){
    stepBrd3.style.borderBottom = "3px solid white"; 
}
step3.onmouseout = function(){
    stepBrd3.style.borderBottom = "3px solid black"; 
}
