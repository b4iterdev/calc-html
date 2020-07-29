/*jshint esversion: 6 */
function setNumber(number) {
    document.getElementById('result').value += number;
}
function doCaculate(expression) {
    var value = document.getElementById('result').value;
    if (value.includes("+") 
     || value.includes("-")
     || value.includes("x")
     || value.includes("÷")
     ) {
        equal(); 
     }
     if (value.includes("++") 
     || value.includes("--")
     || value.includes("xx")
     || value.includes("÷÷")
     ) {
        alert("Wrong");
        document.getElementById('result').value = "";
     }
     document.getElementById('result').value += expression;
}
function clear1() {
    document.getElementById('result').value = "";
}
function equal() {
    if (document.getElementById('result').value.includes("+")) {
        var split = document.getElementById('result').value.trim().split('+');
        split = split.filter(x => x != "");{
        }
        if (split.length == 1) {
            alert('Wrong');
        } 
        else {
            document.getElementById('result').value = Number(split[0]) + Number(split[1]);
        }
    }
    else if (document.getElementById('result').value.includes("-")) {
        var result2 = document.getElementById('result').value;
        var split2 = result2.split("-");
        if (split2.length == 1) {
            alert('Wrong');
        } else {
            document.getElementById('result').value = Number(split2[0]) + Number(split2[1]);
        }
    }
    else if (document.getElementById('result').value.includes("x")) {
        var result3 = document.getElementById('result').value;
        var split3 = result3.split("x");
        if (split3.length == 1) {
            alert('Wrong');
        } else {
            document.getElementById('result').value = Number(split3[0]) + Number(split3[1]);
        }
    }
    else if (document.getElementById('result').value.includes("÷")) {
        var result4 = document.getElementById('result').value;
        var split4 = result4.split("÷");
        if (split4.length == 1) {
            alert('Wrong');
        } else {
            document.getElementById('result').value = Number(split4[0]) + Number(split4[1]);
        }
    }
    else if (document.getElementById('result').value.includes("%")) {
        var result5 = document.getElementById('result').value;
        var split5 = result5.split("%");
        if (split5.length == 1) {
            alert('Wrong');
        } else {
            document.getElementById('result').value = Number(split5[0]) + Number(split5[1]);
        }
    }
}