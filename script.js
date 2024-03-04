const dice=document.getElementById('dice-btn');

function dicegame(){
    var randomdice=Math.floor((Math.random()*6)+1);
    var dicelocation="dice-"+randomdice+".png";
    var img1=document.querySelectorAll("img")[0];
    img1.setAttribute("src",dicelocation);

    var randomdice2=Math.floor((Math.random()*6)+1);
    var dicelocation2="dice-"+randomdice2+".png";
    var img2=document.querySelectorAll("img")[1];
    img2.setAttribute("src",dicelocation2);

    if(randomdice > randomdice2){
        document.querySelector("h1").innerHTML="&#128681; Player 1 Win !";
    }
    else if(randomdice < randomdice2){
        document.querySelector("h1").innerHTML="&#128681; Player 2 Win !";
    }
    else if(randomdice=randomdice2){
        document.querySelector("h1").innerHTML="&#128681; Match Draw ! &#128681;";
    }
    else{
        document.querySelector("h1").innerHTML="Something Error!"
    }
    dice.innerHTML="Play Again"
}
