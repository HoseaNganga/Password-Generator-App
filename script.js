//SELECT RELEVANT DOM ELEMENTS
const outputField=document.querySelector(`.outputField`);
const copyButton=document.querySelector(`.copyButton`);
const passwordLengthSelecetor=document.getElementById(`passwordLength`);
const upperCaseSelecetor=document.getElementById(`upper`);
const lowerCaseSelecetor=document.getElementById(`lower`);
const numberSelecetor=document.getElementById(`numbers`);
const symbolSelecetor=document.getElementById(`symbols`);
const generatePasswordButton=document.querySelector(`.generateButton`);

//ASSIGN VALUES TO VARIABLES UPPERCASE,LOWERCASE,NUMBERS AND SYMBOLS
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="0123456789";
const symbols="!@#$%^&*()><.?/\|";

//FUNCTIONS TO GENERATE RANDOM LETTERS,NUMBERS AND SYMBOLS
function getRandomUpperCase(){
    return upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)];
}
function getRandomLowerCase(){
    return lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)];
}
function getRandomNumbers(){
    return numbers[Math.floor(Math.random()*numbers.length)];
}
function getRandomSymbols(){
    return symbols[Math.floor(Math.random()*symbols.length)];
}

//ADD EVENT LISTENER TO GENERATE PASSWORD BUTTON TO GENERATE A VALID PASSWORD BASED ON CHECKBOXES CHECKED

generatePasswordButton.addEventListener(`click`,generatePassword);

function generatePassword(){
    //GET LENGTH OF THE PASSWORD
    const length=passwordLengthSelecetor.value;

    //CREATE EMPTY STRING TO STORE PASSWORD
    let password="";

    for(let i=0;i<length;i++){
        //ASSIGN A CONSTANT TO FUNCTION THAT GENERATES A RANDOM VALUE
        const concatValue=generateRandomValue();
        password+=concatValue;
    }
    //ADD THE PASSWORD TO DOM
    if(password){
        outputField.value=password;
    }else{
        return"";
    }
  
}

//FUNCTION THAT WILL GENERATE A RANDOM VALUE BASED ON CHECKBOX CHECKED
function generateRandomValue(){
    //CREATE ARRAY TO STORE RANDOM VALUES AND LOOP TO GET ONE RANDOM VALUE AT A TIME
    const arr=[];
    if(upperCaseSelecetor.checked){
        arr.push(getRandomUpperCase());
    }
    if(lowerCaseSelecetor.checked){
        arr.push(getRandomLowerCase());
    }
    if(numberSelecetor.checked){
        arr.push(getRandomNumbers());
    }
    if(symbolSelecetor.checked){
        arr.push(getRandomSymbols());
    }

    return arr[Math.floor(Math.random()*arr.length)]
}

//FUNCTION TO COPY PASSWORD..ADD EVENT LISTENER TO COPY BUTTON
copyButton.addEventListener(`click`,copyPassword);

function copyPassword(){
    //CREATE A TEXTAREA
    const txtarea=document.createElement(`textarea`);
    const password=outputField.value;

    if(!password){
        return;
    }else{
        txtarea.value=password;
        document.body.appendChild(txtarea);
        txtarea.select();
        document.execCommand("copy");
        txtarea.remove();
        outputField.value="";
        alert(`Password copied to clipboard`);
    }
}