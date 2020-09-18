//a. Añada la propiedad onclick a los botones X
function addOnClick(){
  const a = document.getElementsByTagName("span")[0];
  const a_1=document.getElementsByTagName("span")[1];
  const a_2=document.getElementsByTagName("span")[2];
  const a_3=document.getElementsByTagName("span")[3];
  const b = document.getElementsByClassName("alert alert-success")[0];
  const b_1=document.getElementsByClassName("alert alert-warning")[0];
  const b_2=document.getElementsByClassName("alert alert-primary")[0];
  const b_3=document.getElementsByClassName("alert alert-secondary")[0];
  a.onclick  = function(){
    b.remove(0);
  }
  a_1.onclick=function (){
    b_1.remove(0);
  }
  a_2.onclick=function (){
    b_2.remove(0);
  }
  a_3.onclick=function (){
    b_3.remove(0);
  }
}
//b. Añada la propiedad onclick a los botones Visitar
var x=0;
var y=0;
const c = document.getElementsByTagName("a")[0];
const d = document.getElementById("uros");
const c_1 = document.getElementsByTagName("a")[1];
const d_1= document.getElementById("taquile");
c.onclick = function(){
  x+=1;
  d.innerHTML="Uros: "+x;
}
c_1.onclick = function(){
  y+=1;
  d_1.innerHTML="Taquile: "+y;
}

//c. Añada etiquetas HTML - DIV desde una cadena: Alerta Bootstrap
const caja1='<div class="alert alert-danger" id="div1" >Este mensaje desaparecerá...al cliquear en el botón<button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="cerrar()"><span>&times;</span></button></div>';
const caja2='<div class="alert alert-success" id="div2">Este mensaje desaparecerá...al cliquear en el botón<button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="cerrar1()"><span>&times;</span></button></div>';
const caja3='<div class="alert alert-warning" id="div3">Este mensaje desaparecerá...al cliquear en el botón<button type="button" class="close" data-dismiss="alert" aria-label="Close" onclick="cerrar2()"><span>&times;</span></button></div>';
function alerta(){
  const d1=document.getElementById("d1");
  d1.innerHTML=caja1;
}
function suseso(){
  const d1=document.getElementById("d1");
  d1.innerHTML=caja2;  
}
function peligro(){
  const d1=document.getElementById("d1");
  d1.innerHTML=caja3;  
}
function cerrar(){
  const aux = document.getElementById("div1");
  aux.remove(0);
}
function cerrar1(){
  const aux = document.getElementById("div2");
  aux.remove(0);
}
function cerrar2(){
  const aux = document.getElementById("div3");
  aux.remove(0);
}

//d. Añada etiquetas HTML - item de lista desde una cadena

const peliculas = ["Gladiador","Titanic","X-Men", "Avengers"];
const musica = ["Robbie Williams", "Katy Perry","Coldplay"];
const libros    = ["Meg", "Agua para elefantes","Oscura","Plenitud","Testamento Maya"];
const titulo = document.getElementById("t1");
const caja_1=document.getElementById("t2");
function peliculas_(){
  aux_=peliculas.map(function(item){
    return `<li class="list-group-item" style-type="none" >${item}</li>`;
  });
  titulo.innerHTML="PELICULAS";
  caja_1.innerHTML=aux_.join("");
}
function libros_(){
  aux_=libros.map(function(item){
    return `<li class="list-group-item" style-type="none" >${item}</li>`
  });
  titulo.innerHTML="LIBROS";
  caja_1.innerHTML=aux_.join("");
}
function musica_(){
  aux_=musica.map(function(item){
    return `<li class="list-group-item" style-type="none" >${item}</li>`
  });
  titulo.innerHTML="MUSICA";
  caja_1.innerHTML=aux_.join("");
}
//<li class="list-group-item">Asmsmmfr</li>

