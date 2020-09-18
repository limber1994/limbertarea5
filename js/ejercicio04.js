function sumar(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("resp");
    c.value=parseInt(a)+parseInt(b);
}
function restar(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("resp");
    c.value=parseInt(a)-parseInt(b);
}
function multiplicar(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("resp");
    c.value=parseInt(a)*parseInt(b);
}
function dividir(){
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    var c = document.getElementById("resp");
    c.value=parseInt(a)/parseInt(b);
}
function sumaR(){
    var x,y;
    var z;
    var resultado;
    var a = document.getElementById("r1").value;
    var b = document.getElementById("r2").value;
    switch(a){
        case "I":
             x=1;
            break;
        case "II":
             x=2;
            break;
        case "III":
            x=3;
            break;
        case "IV":
             x=4;
            break;
        case "V":
             x=5;
            break;
        case "VI":
             x=6;
            break;
        case "VII":
             x=7;
            break;
        case "VIII":
             x=8;
            break;
        case "IX":
             x=9;
            break;
        case "X":
             x=10;
            break;
    }
    switch(b){
        case "I":
             y=1;
            break;
        case "II":
            y=2;
            break;
        case "III":
             y=3;
            break;
        case "IV":
             y=4;
            break;
        case "V":
             y=5;
            break;
        case "VI":
             y=6;
            break;
        case "VII":
             y=7;
            break;
        case "VIII":
             y=8;
            break;
        case "IX":
             y=9;
            break;
        case "X":
             y=10;
            break;
    }
    var c = document.getElementById("respR");
    resultado=x+y;
    switch(resultado){
        case 1:
            z="I";
           break;
       case 2:
           z="II";
           break;
       case 3:
            z="III";
           break;
       case 4:
            z="IV";
           break;
       case 5:
            z="V";
           break;
       case 6:
            z="VI";
           break;
       case 7:
            z="VII";
           break;
       case 8:
            z="VII";
           break;
       case 9:
            z="IX";
           break;
       case 10:
            z="X";
           break;
    }
    c.value=z;
}
function restarR(){
    var x,y;
    var z;
    var resultado;
    var a = document.getElementById("r1").value;
    var b = document.getElementById("r2").value;
    switch(a){
        case "I":
             x=1;
            break;
        case "II":
             x=2;
            break;
        case "III":
            x=3;
            break;
        case "IV":
             x=4;
            break;
        case "V":
             x=5;
            break;
        case "VI":
             x=6;
            break;
        case "VII":
             x=7;
            break;
        case "VIII":
             x=8;
            break;
        case "IX":
             x=9;
            break;
        case "X":
             x=10;
            break;
    }
    switch(b){
        case "I":
             y=1;
            break;
        case "II":
            y=2;
            break;
        case "III":
             y=3;
            break;
        case "IV":
             y=4;
            break;
        case "V":
             y=5;
            break;
        case "VI":
             y=6;
            break;
        case "VII":
             y=7;
            break;
        case "VIII":
             y=8;
            break;
        case "IX":
             y=9;
            break;
        case "X":
             y=10;
            break;
    }
    var c = document.getElementById("respR");
    resultado=x-y;
    switch(resultado){
        case 1:
            z="I";
           break;
       case 2:
           z="II";
           break;
       case 3:
            z="III";
           break;
       case 4:
            z="IV";
           break;
       case 5:
            z="V";
           break;
       case 6:
            z="VI";
           break;
       case 7:
            z="VII";
           break;
       case 8:
            z="VII";
           break;
       case 9:
            z="IX";
           break;
       case 10:
            z="X";
           break;
    }
    c.value=z;
}
function multiplicarR(){
    var x,y;
    var z;
    var resultado;
    var a = document.getElementById("r1").value;
    var b = document.getElementById("r2").value;
    switch(a){
        case "I":
             x=1;
            break;
        case "II":
             x=2;
            break;
        case "III":
            x=3;
            break;
        case "IV":
             x=4;
            break;
        case "V":
             x=5;
            break;
        case "VI":
             x=6;
            break;
        case "VII":
             x=7;
            break;
        case "VIII":
             x=8;
            break;
        case "IX":
             x=9;
            break;
        case "X":
             x=10;
            break;
    }
    switch(b){
        case "I":
             y=1;
            break;
        case "II":
            y=2;
            break;
        case "III":
             y=3;
            break;
        case "IV":
             y=4;
            break;
        case "V":
             y=5;
            break;
        case "VI":
             y=6;
            break;
        case "VII":
             y=7;
            break;
        case "VIII":
             y=8;
            break;
        case "IX":
             y=9;
            break;
        case "X":
             y=10;
            break;
    }
    var c = document.getElementById("respR");
    resultado=x*y;
    switch(resultado){
        case 1:
            z="I";
           break;
       case 2:
           z="II";
           break;
       case 3:
            z="III";
           break;
       case 4:
            z="IV";
           break;
       case 5:
            z="V";
           break;
       case 6:
            z="VI";
           break;
       case 7:
            z="VII";
           break;
       case 8:
            z="VIII";
           break;
       case 9:
            z="IX";
           break;
       case 10:
            z="X";
           break;
    }
    c.value=z;
}
function dividirR(){
    var x,y;
    var z;
    var resultado;
    var a = document.getElementById("r1").value;
    var b = document.getElementById("r2").value;
    switch(a){
        case "I":
             x=1;
            break;
        case "II":
             x=2;
            break;
        case "III":
            x=3;
            break;
        case "IV":
             x=4;
            break;
        case "V":
             x=5;
            break;
        case "VI":
             x=6;
            break;
        case "VII":
             x=7;
            break;
        case "VIII":
             x=8;
            break;
        case "IX":
             x=9;
            break;
        case "X":
             x=10;
            break;
    }
    switch(b){
        case "I":
             y=1;
            break;
        case "II":
            y=2;
            break;
        case "III":
             y=3;
            break;
        case "IV":
             y=4;
            break;
        case "V":
             y=5;
            break;
        case "VI":
             y=6;
            break;
        case "VII":
             y=7;
            break;
        case "VIII":
             y=8;
            break;
        case "IX":
             y=9;
            break;
        case "X":
             y=10;
            break;
    }
    var c = document.getElementById("respR");
    resultado=x/y;
    switch(resultado){
        case 1:
            z="I";
           break;
       case 2:
           z="II";
           break;
       case 3:
            z="III";
           break;
       case 4:
            z="IV";
           break;
       case 5:
            z="V";
           break;
       case 6:
            z="VI";
           break;
       case 7:
            z="VII";
           break;
       case 8:
            z="VII";
           break;
       case 9:
            z="IX";
           break;
       case 10:
            z="X";
           break;
    }
    c.value=z;
}