function hay() {
    let numberOne= parseInt(document.getElementById("numberOne").value);
    let numberTwo= parseInt(document.getElementById("numberTwo").value);
    let t=numberOne + numberTwo;
    document.getElementById("Result").innerHTML="Result= "+t;
}
function tru1() {
    let numberOne= parseInt(document.getElementById("numberOne").value);
    let numberTwo= parseInt(document.getElementById("numberTwo").value);
    let t=numberOne - numberTwo;
    document.getElementById("Result").innerHTML="Result= "+t;
}
function nhan1() {
    let numberOne= parseInt(document.getElementById("numberOne").value);
    let numberTwo= parseInt(document.getElementById("numberTwo").value);
    let t=numberOne * numberTwo;
    document.getElementById("Result").innerHTML="Result= "+t;
}
function chia1() {
    let numberOne= parseInt(document.getElementById("numberOne").value);
    let numberTwo= parseInt(document.getElementById("numberTwo").value);
    let t=numberOne / numberTwo;
    document.getElementById("Result").innerHTML="Result= "+t;
}