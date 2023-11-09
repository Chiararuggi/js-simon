let casualNumbers = [];


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