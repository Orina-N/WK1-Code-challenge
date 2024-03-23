//declare a function that will be conducting the calculations
const netSalaryCalculator = grossIncome => {
   //declare a variable that will be carrying the value of net salary calculated
    let netSalary;
    // give the conditions for the different tax brackets and their taxation rates
    if (grossIncome > 0 && grossIncome <= 24000){
        return netSalary = grossIncome - ((grossIncome * 0.1) + 750)
    }else if (grossIncome > 24000 && grossIncome <= 32333){
        return netSalary = grossIncome - ((grossIncome * 0.25) + 850)
    }else if (grossIncome > 32333 && grossIncome <= 500000){
        return netSalary = grossIncome - ((grossIncome * 0.3)+ 950)
    }else if (grossIncome > 500000 && grossIncome <= 800000){
        return netSalary = grossIncome - ((grossIncome * 0.325)+1050)
    }else if (grossIncome > 800000){
        return netSalary = grossIncome - ((grossIncome * 0.35)+ 1150)
    }
}
// to see the net salary in the console , log the called function with the gross income as its argument
console.log(netSalaryCalculator(900000))