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

document.getElementById("generateButton").addEventListener("click", function(){

    casualNumbers = fiveNumberGenerator();
    console.log(casualNumbers);


});