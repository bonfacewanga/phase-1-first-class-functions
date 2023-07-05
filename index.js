function receivesAFunction(drinkWater){
    takeAShower(); 
    drinkWater();
}
function takeAShower(){
    console.log("Take a shower") 
}
function receivesAFunction(drinkWater){
    takeAShower(); 
    drinkWater();
}
receivesAFunction();
function returnsANamedFunction(){
    return function book(){
       console.log("Read a notes on Javascript") 
    }
}
function returnsAnAnonymousFunction(){
    return()=>{console.log("Go visit my grandparents")}
}
 