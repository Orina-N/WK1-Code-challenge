// declare speed tracking function and give it a parameter of speed
const speedTracking = speed => {
    // declare a demerit point assigner
    let demeritPoints ;
    // condition for when speed is less than 70km
    if(speed > 0 && speed <= 70){
        return "Ok"
    }
    //condition for differentiating  the  levels of speeding
    else{
        demeritPoints = Math.floor((speed - 70)/ 5)
    }
    //to show message displayed when demerit points is above 12
    if(demeritPoints > 12){
     console.log("License suspended")
    }
    // to show message displayed in different levels of the demerit pointer
    else{
        return `Points: ${demeritPoints}`
    }
}
//You can check if the code is working by calling the function and passing it with the argument of the speed you want .
console.log(speedTracking(95))