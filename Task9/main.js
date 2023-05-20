let raceNumber = Math.floor(Math.random() * 1000);

let check=1;

let runnerAge=32;

if(runnerAge>18 && check){
    raceNumber+=1000;

}

if(runnerAge>18 && check ){
    console.log(`Your race number is: ${raceNumber} and your race wiil start at 9:30am`);
}
else if(runnerAge>18 && !check){
    console.log(`Your race number is: ${raceNumber} and your race  will start at 11:00am`);
}
else if(runnerAge<18){
    console.log(`Your race number is: ${raceNumber} and your race  will start at 12:30pm`);
}
else{
    console.log("check the registrstion desk");
}

 
