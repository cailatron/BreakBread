brokenBread = 0;
totalBread = 0;

breakingPower = 1
bakers = 0;
bakerCost = 5;
millers = 0;
millerCost = 15;

// the basic button 
 function breakBread(){
   brokenBread = brokenBread + breakingPower;
   document.getElementById("brokenBreadID").innerHTML = brokenBread;
   totalBread = totalBread + breakingPower;
   document.getElementById("totalBreadID").innerHTML = totalBread;
 }


//give bread to baker button
function giveBaker(){
  if (brokenBread >= bakerCost){
    brokenBread = brokenBread - bakerCost;
    bakers = bakers + 1;
    
    document.getElementById("brokenBreadID").innerHTML = brokenBread;
    document.getElementById("bakersID").innerHTML = bakers;
    //not sure i need this 'cause im not changing it rn
    document.getElementById("bakerCostID").innerHTML = bakerCost;
    
  }
}

//give bread to miller button
function giveMiller(){
  if (brokenBread >= millerCost){
    brokenBread = brokenBread - millerCost;
    millers = millers + 1;

    document.getElementById("brokenBreadID").innerHTML = brokenBread;
    document.getElementById("millersID").innerHTML = millers;
    //not sure i need this 'cause im not changing it rn
    document.getElementById("millerCostID").innerHTML = bakerCost;

  }
}


setInterval(function(){
  // This is the code that runs every second
  // fancy math is so that it round to 0.01 place

  // ===== Bakers Effect =====
  brokenBread = Math.round((brokenBread + (bakers*0.1)) * 100) / 100;
  totalBread = Math.round((totalBread + (bakers*0.1)) * 100) / 100;
  // ===== Millers Effect =====
  brokenBread = Math.round((brokenBread + (millers*0.5)) * 100) / 100;
  totalBread = Math.round((totalBread + (millers*0.5)) * 100) / 100;
  

  //updating the display of # of broken bread and total
  document.getElementById("brokenBreadID").innerHTML = brokenBread;
  document.getElementById("totalBreadID").innerHTML = totalBread;
}, 1000) //1000ms = 1 second