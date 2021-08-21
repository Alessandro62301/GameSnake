const screen = document.getElementById('screen')
const context = screen.getContext("2d")

window.onload = function(){



    const Setting = {
        vel:1,
        speedX:1,
        speedY:0,
        positionX:10,
        positionY:15,
        length:20,
        amount:20,
        fruitX:15,
        fruitY:15,
        permision:false,
    }
    var trail=[];
    tail=10;

    setInterval(game,60)

    document.addEventListener("keydown", keyPush);

    function game(){

        Setting.positionX += Setting.speedX;      
        Setting.positionY += Setting.speedY;
       
        if(Setting.positionX < 0 ){
            Setting.positionX = Setting.amount - 1;
        }
        if(Setting.positionX > Setting.amount - 1 ){
            Setting.positionX = 0;
        }
        if(Setting.positionY < 0 ){
            Setting.positionY = Setting.amount - 1;
        }
        if(Setting.positionY > Setting.amount - 1 ){
            Setting.positionY = 0;
        }
        

    context.fillStyle = "#111111";
    context.fillRect(0,0,screen.width,screen.height);

    context.fillStyle = "red";
    context.fillRect((Setting.fruitX * Setting.length),(Setting.fruitY * Setting.length),Setting.length,Setting.length);

    context.fillStyle = "#cccccc"
    for(var i = 0 ; i < trail.length; i++){
        context.fillRect((trail[i].x * Setting.length),(trail[i].y * Setting.length),Setting.length-1,Setting.length-1);
        if((trail[i].x == Setting.positionX) && (trail[i].y == Setting.positionY)){
            Setting.speedX = Setting.speedY = 0;
            tail =10;
            
        }
    }
    
    trail.push({x:Setting.positionX,y:Setting.positionY})
    while(trail.length > tail){
        trail.shift();
    }

    if(Setting.fruitX==Setting.positionX && Setting.fruitY==Setting.positionY){
        tail++;
        Setting.fruitX = Math.floor(Math.random()*Setting.amount);
        Setting.fruitY = Math.floor(Math.random()*Setting.amount);
    }


   }

   function keyPush(event){
    
    if(Setting.speedX > 0 || Setting.speedX < 0){

        switch(event.keyCode){
            case 38: //arrow up
                Setting.speedX = 0;
                Setting.speedY = -Setting.vel;
                console.log('arrow up')
            break;
    
            case 40: //arrow donw
                Setting.speedX = 0;
                Setting.speedY = Setting.vel;
                console.log('arrow donw')
            break;
    
            default:
                break;
        }
    }
    if(Setting.speedY > 0 || Setting.speedY < 0){   

    switch(event.keyCode){
        case 37: //arrow left
            Setting.speedX = -Setting.vel;
            Setting.speedY = 0;
            console.log('arrow left')
        break;
        
        case 39: //arrow right
            Setting.speedX = Setting.vel;
            Setting.speedY = 0;
            console.log('arrow right')
        break;
        

        default:
            break;
    }
}
// if(Setting.speedX == 0 || Setting.speedY == 0){
//     switch(event.keyCode){
//          case 37: //arrow left
//             Setting.speedX = -Setting.vel;
//             Setting.speedY = 0;
//             console.log('arrow left')
//         break;

//         case 38: //arrow up
//             Setting.speedX = 0;
//             Setting.speedY = -Setting.vel;
//             console.log('arrow up')
//         break;

//         case 39: //arrow right
//             Setting.speedX = Setting.vel;
//             Setting.speedY = 0;
//             console.log('arrow right')
//         break;

//         case 40: //arrow donw
//             Setting.speedX = 0;
//             Setting.speedY = Setting.vel;
//             console.log('arrow donw')
//         break;

//         default:
//             break;
//     }
// }
}
   
}