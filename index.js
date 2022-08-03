var balls = document.querySelectorAll("img");


function movement(event){
for (i=0; i<balls.length; i++){
    balls[i].style.transition = "all 0s ease"

    var Width = event.clientX  * 50 /window.innerWidth +  "%"  ;
    var hight = event.clientY * 50 / window.innerHeight +  "%";
    
    balls[i].style.left =  Width ;
    balls[i].style.top = hight;
    balls[i].style.transform = "translate(-" + Width +" , - " + hight+ ")";

}}

function leave(){

    for (i=0; i<balls.length; i++){

        balls[i].style.left = "28%" ;
        balls[i].style.top = "28%" ;
        balls[i].style.transition = "all 1s ease"
        
    }}