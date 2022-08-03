var balls = document.querySelectorAll("img");


function movement(event){
for (i=0; i<balls.length; i++){
    balls[i].style.transition = "all 0s ease"

    var Width = event.clientX  * 100 /window.innerWidth +  "%"  ;
    var hight = event.clientY * 100 / window.innerHeight +  "%";
    
    balls[i].style.left =  Width ;
    balls[i].style.top = hight;
    balls[i].style.transform = "translate(-" + Width +" , - " + hight+ ")";

    
}
}

function leave(){

    for (i=0; i<balls.length; i++){

        balls[i].style.left = "28%" ;
        balls[i].style.top = "28%" ;
        balls[i].style.transition = "all 1s ease"
        
    }
         
        

}





// var balls = document.querySelectorAll("img");

// function move(mousemove){
//     var Widthh = EventTarget.clintX * 100 / window.innerWidth + "%";
//     var hight = EventTarget.clintY * 100 / window.innerHeight + "%";
//     console.log("op")


//     for (i=0; i<3 ;i++){
//         console.log("hi");
//         balls[i].ClassList.add("take");
//         balls[i].style.left = Widthh;
//         balls[i].style.top = hight;
//         return

//     }
// }












// var h =document.getElementsByClassName(".circle");
// var balls = h.style.left = 0 +"%";

// body.document.onmousemove = function (){

//     var x = event.clintX * 100 / window.innerWidth + "%";
//     var y = event.clintY * 100 / window.innerHeight + "%";
    

//     for(var i=0; i<2; i++){
//         balls = balls.document.innerHTML.style.left; 
//         balls[i].style.left = x;
//         console.log=('hi')
//     }
// }






// document.querySelector('body').addEventListener('mousemove' , eyeball);

// function eyeball(){
//     const eye =document.querySelectorAll('.circle') 

// eye.forEach(function(eye){

//     let x = (eye.getBoundingClientRect().left) * (eye.clientWidth /2 );
//     let y = (eye.getBoundingClientRect().top) * (eye.clientHeight / 2 );

//     let radian = math.atan2(event.pagex - x ,event.pageY -y);

//     let rotation = (radian * (180 / math.PI) * -1) +270;

//     eye.getElementsByClassName.transform ="rotate(" + rotation +"deg)"
// });
// }