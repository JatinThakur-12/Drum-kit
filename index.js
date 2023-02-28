let numberOfButtons= document.querySelectorAll(".drum").length;
function playSound(content){
    switch (content.toLowerCase()) {
        case "w":
            let tom1=new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2=new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3=new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            let tom4=new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            let snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash=new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kickBass=new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;
        case ' ':
            break;
        default:
            console.log(content);
            break;
    }
}
//Detecting button press
for( let i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonContent= this.innerHTML;
        playSound(buttonContent);
        buttonAnimation(buttonContent);
    });
}
//Detecting keyPress
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
    // console.log(event);
});
function buttonAnimation(buttonContent){
    let activeButton= document.querySelector("."+buttonContent.toLowerCase());
    activeButton.classList.add("pressed");
    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },200);
}


    