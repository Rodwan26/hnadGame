const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
 let cc= ["Rock","Scissors","Paper"];
 let res = document.getElementById ("result");
 let cpl = 0;
 let cco = 0;
 let plysc = document.getElementById("playerscore") ;
 let comco = document.getElementById ("computerscore");
function choice ( i ){
    
    let rand = cc[Math.floor(Math.random() * 3 )];
     pc = document.getElementById("player").textContent = ` ${i}`;
     dc = document.getElementById("Computer").textContent = `${rand}`;
   if(i === rand){
  result = `Its tie`;
   }else{ 
   switch (i){
   case "Rock":
      result = (rand === "Paper") ? `You loss` : "You win";  
      break;
   case "Scissors":
      result = ( rand === "Paper") ? "You win" : "You loss" ;
      break;
   case "Paper" :
      result = (rand === "Rock") ? "You win" : "You loss" ;
      break;
    
       }
    }
    res.classList.remove("greentext","redtext","bluetext");

    res.textContent = result ;

    if (result === "You win"){
        res.classList.add("greentext");
        cpl++;
     }else if( result === "Its tie"){
        res.classList.add("bluetext")
    }else{
        cco++;
        res.classList.add("redtext");
    }
    plysc.textContent = `player score: ${cpl}`;
comco.textContent = `computer score: ${cco}`;

}
