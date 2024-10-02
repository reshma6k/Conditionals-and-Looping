
function calculateSum (){
    const userInputNum =prompt("Enter a number b/w 0 and 1000000")
    const number = parseInt(userInputNum)
    if (isNaN(number) || number<0|| number>1000000){
        console.log("Invalid number")
    }
else{
const totalSum = (number*(number+1))/2 

console.log(`Sum of numbers up to ${number} is ${totalSum}`)
}
}
calculateSum()