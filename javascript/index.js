
console.log('App started')
var container = '<div class="container-fluid bg-dark text-white"> <input type = "number" name="figure" class="figure col-3 bg-dark text-light" placeholder= "enter figure" id="1">  <input name="operator" id="sign" class="operator col-3 bg-dark text-light" placeholder= "enter operator">  <input id="2" name="figureTwo" type ="number" class="figureTwo col-3 bg-dark text-light" placeholder= "enter figure"> <p  id = "ans" class="ans d-block text-center col-3 bg-dark text-light">answer oooo</p> <h1> Just so you Know!</h1></div>';
$("section").append(container);
var ansContainer = document.getElementById("ans");
function getVal(x,y,z){
    var ans;
    switch(y){
        case "":
        case null:
            ans = "Kindly fill in a value";
            break;
        case "+" :
            ans = x + z;
            break;
        case "-" :
            ans = x-z;
            break;
        case "*" :
            ans = x*z;
            break;
        case "/":
            ans = x/z;
            break;
        case "^":
        case "**":
            ans = x**z;
            break;
        case "root":
            ans= x**(1/z);
            break;

    }
    return ans;
}
function calculate(){
    var figure = document.getElementById("1").value;
var operator = document.getElementById("sign").value;
var figureTwo = document.getElementById("2").value;
    console.log(figure,operator, figureTwo)
    var whatever = getVal(figure,operator, figureTwo);
    ansContainer.textContent =whatever;   
}

