const defaultResult=0;
let currentResult=defaultResult;
let logEnteryes=[];

let getUserInput=()=>{
    return parseInt(userInput.value);
}
 
let createAndWriteOutput=(operator,resultBeforeCalc,calcNumber)=>{
    const calculationDiscription= `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calculationDiscription);
}

let writeToLog =(operationIdentifier,prevResult,operationNumber,newResult)=>{
    let logEntery={
        operation:operationIdentifier,
        previousValue:prevResult,
        pasedNumber:operationNumber,
        output:newResult
     }
     logEnteryes.push(logEntery);
     console.log(logEntery);
}

let calculateResult=(calculationType)=>{
const enteredNumber=getUserInput();
const inetialresult= currentResult;
let mathOperator;
if(calculationType === 'add'){
    currentResult += enteredNumber;
    mathOperator = '+'
} else if(calculationType === 'substract'){
    currentResult -= enteredNumber;
    mathOperator = '-'
}else if(calculationType === 'multiply' ){
    currentResult =  currentResult * enteredNumber;
    mathOperator = '*'
}else if(calculationType === 'divide'){
    currentResult =  currentResult / enteredNumber;
    mathOperator = '/' 
}
createAndWriteOutput(mathOperator,inetialresult,enteredNumber)
writeToLog(calculationType,inetialresult,enteredNumber,currentResult) 
}
let add=()=>{
    calculateResult('add')   
}

function substract(){
    calculateResult('substract')
 }
function multiply(){
   calculateResult('multiply')
 }
function divide(){
    calculateResult('divide')
 }
 addBtn.addEventListener('click' ,add)
 subtractBtn.addEventListener('click',substract)
 multiplyBtn.addEventListener('click',multiply)
 divideBtn.addEventListener('click',divide)

