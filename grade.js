//declare score variable where you input your score 
//declare a letter variable which assings grade based on the marks scored by the student
let score = 68;
let letter;
//use conditional statements to show the conditions to be meet for a certain letter to be assigned
if (score > 79 && score <= 100){
    letter = "A"
}else if ( score >= 60 && score <= 79){
    letter = "B"
}else if (score >= 50 && score <= 59 ){
    letter = "C"
}else if (score >= 40 && score <= 49){
    letter = "D"
}else if (score < 40 && score >= 0){
    letter = "E"
}else if (score < 0 && score > 100){
    letter = "error"
}
//used to show the letter printed on the console 
 console.log(letter)