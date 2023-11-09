let casualNumbers = [];
let userArray = [];
let guessedNumb= 0;

function getRndNumber(){
    return Math.floor((Math.random() * 100) + 1);
};

function fiveNumberGenerator(){
    const fiveNumbArray= [];
    for (let i = 0; i < 5; i++){
        fiveNumbArray.push(getRndNumber(i));
    };
    return fiveNumbArray;
};

function printNumbers(){
    casualNumbers = fiveNumberGenerator();
    document.getElementById("message").innerHTML = "Sequenza di numeri " + casualNumbers;
};

function getUserInput(){
    let userInput =  document.getElementById("userInput");
    return parseInt(userInput.value);
};

function pushIntoAnArray(){
    if (userArray.length < 5){
        userArray.push(getUserInput());
        console.log(userArray.length);
    } 
    else {
        document.getElementById("error").innerHTML = "Non puoi inserire più numeri";
    }
}

function checkWin(){
        for (let i = 0; i < userArray.length; i++) {
            if (userArray[i] == casualNumbers[i]){
                document.getElementById("whichNumb").innerHTML = userArray[i];
                guessedNumb += 1;
                document.getElementById("guessedNumb").innerHTML = "Il tuo punteggio è " + guessedNumb;
            }
            
        }
}

document.getElementById("generateButton").addEventListener("click", function(){

    //print five numbers and after 30s they disappear
    printNumbers();
    setTimeout(function(){
        document.getElementById("message").innerHTML = "";
    }, 3000);

    //input type text appear
    setTimeout(function(){
        document.getElementById("userInput").style.display="block";
    }, 3001);
});

document.getElementById("sendInputButton").addEventListener("click", function(){
    pushIntoAnArray();
});

document.getElementById("playButton").addEventListener("click", function(){
    checkWin();
});