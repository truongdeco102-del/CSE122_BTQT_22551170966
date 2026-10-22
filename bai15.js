let currentExpresstion ="";

function appendValue(Value){
    currentExpresstion += Value;
    document.getElementById('expression').innerText = currentExpresstion;

}

function clearALL(){
    currentExpresstion="";
    document.getElementById('expression').innerText="";
    document.getElementById('result').innerText="0";
}

function calculate() {
    try {
let computerString = currentExpresstion
        .replace(/x/g,'*')
        .replace(/÷/g,'/');
    let evalResult = eval(computerString);

    if(evalResult === undefined || isNaN(evalResult)){
        document.getElementById('result').innerText = "loi";
    }
    else{
        document.getElementById('result').innerText=evalResult;
    } 
}
    catch (error){
        document.getElementById('result').innerText ="loi";
    }
}
