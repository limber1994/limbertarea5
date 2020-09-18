//a. Manipular una clase de un elemento HTML
var i=-1;
var j=0;
function siguiente(){
    i=i+1;
    j=j+1;
    if(j<5){
        const prueba0 = document.getElementsByTagName("li")[i];
        const prueba = document.getElementsByTagName("li")[j];
        prueba0.classList.remove("active");
        prueba.classList.add("active");
    }else if(j=5){
        i=-1;
        j=0;
        const prueba0 = document.getElementsByTagName("li")[4];
        const prueba = document.getElementsByTagName("li")[0];
        prueba0.classList.remove("active");
        prueba.classList.add("active");
    }
    console.log(j);
}
function previo(){
    if(j>0){
        const prueba0 = document.getElementsByTagName("li")[j];
        const prueba = document.getElementsByTagName("li")[i];
        prueba0.classList.remove("active");
        prueba.classList.add("active");
        j=j-1;
        i=i-1;
    }else if(j==0){
        i=3;
        j=4;
        const prueba0 = document.getElementsByTagName("li")[0];
        const prueba = document.getElementsByTagName("li")[4];
        prueba0.classList.remove("active");
        prueba.classList.add("active");
    }
    console.log(j);
}
/*
La clase "active" en bootstrap añade el estilo de seleccion de un elemento (otro color),
<li class="list-group-item active">Cras justo odio</li>
Si l es el item de la lista
Para añadir la clase "active" a l, use: l.classList.add("active")
Para quitar la clase "active" a l, use: l.classList.remove("active")
Para consultar si l tiene la clase "active", use: l.classList.contains("active"), devuelve true o false
*/

//b. Manipular una clase de un elemento HTML
var x=-1;
function siguiente_(){
    x=x+1;
    if(x<3){
        const imagenes = document.getElementsByClassName("carousel-item");
        imagenes[x].className="carousel-item active";
        imagenes[x-1].className="carousel-item";
    } else if(x==3){
        const imagenes = document.getElementsByClassName("carousel-item");
        imagenes[0].className="carousel-item active";
        imagenes[2].className="carousel-item";
        x=0;
    }
    console.log(x);
}
function previo_(){
    if(x>0){
        const imagenes = document.getElementsByClassName("carousel-item");
        imagenes[x-1].className="carousel-item active";
        imagenes[x].className="carousel-item";
        x=x-1;
    }else if(x==0){
        x=2;
        const imagenes = document.getElementsByClassName("carousel-item");
        imagenes[2].className="carousel-item active";
        imagenes[0].className="carousel-item";
    }
}