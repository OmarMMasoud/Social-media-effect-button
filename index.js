var balls = document.querySelectorAll("img");
// balls.style.postion = "absolute";
// body.addEventListener('mousemove' , hola())



function hola(event){
for (i=0; i<balls.length; i++){

    // var Width = event.clientX  * 100 /event.screenX + "%";
    // var hight = event.clientY * 100 / event.screenY + "%";

    var Width = event.layerX - 60 
    var hight = event.layerY - 60 
    console.log("working?");
    console.log(Width + "px");
    console.log(hight);
    
    balls[i].style.transform = tralate Width + "px";
    balls[i].style.top = hight ;
    
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