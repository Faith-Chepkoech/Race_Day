let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = true;
var runnerAge = 23;
if (registerEarly && runnerAge >18){
  raceNumber +=1000;
}
if (runnerAge >18 && registerEarly)
{
  console.log ("Will race at 9:30" + " " + raceNumber);
}
else if(runnerAge> 18 && !registerEarly){
  console.log("else if runner is over 18 AND did not register early they will race at 11:00am" + " " +raceNumber);
}
else if(runnerAge< 18 ){
  console.log("Youth registrants run at 12:30 pm" +raceNumber);
}
else{
  console.log("runner to see the registration desk");
}


