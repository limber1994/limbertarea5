/*
Obtener un array con la lista de los pilotos
const pilotos = formula1.map(item=>{
    return item.piloto;
});

Dividir el array pilotos en 3 sub-arrays
const pilotosLI07 = pilotos.slice(0,7);
const pilotosLI714 = pilotos.slice(7,14);
const pilotosLI1420 = pilotos.slice(14,20);
*/
var y=0;
var formula1=[
	{piloto:"Lewis Hamilton",numero:44, escuderia:"Mercedes",titulos:6, nacionalidad:"Ingles"},
	{piloto:"Valteri Botas",numero:77, escuderia:"Mercedes",titulos:0, nacionalidad:"Finlandes"},
	{piloto:"Max Verstapen",numero:33, escuderia:"Red Bull",titulos:0, nacionalidad:"Holandes"},
	{piloto:"Alex Albon",numero:23, escuderia:"Red Bull",titulos:0, nacionalidad:"Tailandes"},
	{piloto:"Sebastian Vettel",numero:5, escuderia:"Ferrari",titulos:3, nacionalidad:"Aleman"},
	{piloto:"Charles Leclerc",numero:16, escuderia:"Ferrari",titulos:0, nacionalidad:"Monegasco"},
	{piloto:"Lance Stroll",numero:18, escuderia:"Racing Point",titulos:0,nacionalidad:"Canadiense"},
	{piloto:"Nico Hulkenberg",numero:27, escuderia:"Racing Point",titulos:0, nacionalidad:"Aleman"},
	{piloto:"Esteban Ocon",numero:31, escuderia:"Renault",titulos:0,nacionalidad:"Frances"},
	{piloto:"Daniel Ricciardo",numero:3, escuderia:"Renault",titulos:0,nacionalidad:"Autraliano"},
	{piloto:"Lando Norris",numero:4, escuderia:"McLaren",titulos:0,nacionalidad:"Ingles"},
	{piloto:"Carlos Sainz Jr.",numero:55, escuderia:"McLaren",titulos:0,nacionalidad:"Español"},
	{piloto:"Kimi Raikkonen",numero:7, escuderia:"Alpha Romeo",titulos:1,nacionalidad:"Finlandes"},
	{piloto:"Antonio Giovinazzi",numero:99, escuderia:"Alpha Romeo",titulos:0,nacionalidad:"Italiano"},
	{piloto:"George Russell",numero:63, escuderia:"Williams",titulos:0,nacionalidad:"Ingles"},
	{piloto:"Nicholas Latifi",numero:6, escuderia:"Williams",titulos:0,nacionalidad:"Canadiense"},
	{piloto:"Kevin Magnussen",numero:20, escuderia:"Haas",titulos:0,nacionalidad:"Danes"},
	{piloto:"Romain Grosjean",numero:8, escuderia:"Haas",titulos:0,nacionalidad:"Frances"},
	{piloto:"Daniel Kvyat",numero:26, escuderia:"Alpha Tauri",titulos:0,nacionalidad:"Ruso"},
	{piloto:"Pierre Gastly",numero:10, escuderia:"Alpha Tauri",titulos:0,nacionalidad:"Frances"}
];
var  pilotos = formula1.map(function(item){
    return `<li class="list-group-item 1" style-type="none" id="t1" onclick="seleccion()">${item.piloto}</li>`;
});
var pilotos_1=[];
var pilotos_2=[];
var pilotos_3=[];
for(x=0;x<7;x++){
    pilotos_1.push(pilotos[x]);
}
for(x=7;x<14;x++){
    pilotos_2.push(pilotos[x]);
}
for(x=14;x<20;x++){
    pilotos_3.push(pilotos[x]);
}
function siguiente(){
    const lista = document.getElementById("f1");
    switch(y){
        case 0:
            tab = [];
            index=0;
            aux=0;
            lista.innerHTML=pilotos_1.join("");
            break;
        case 1:
            tab = [];
            index=0;
            aux=0;
            lista.innerHTML=pilotos_2.join("");
            break;
        case 2:
            tab = [];
            index=0;
            aux=0;
            lista.innerHTML=pilotos_3.join("");
            break;
    }
    y=y+1;
    if(y==4){
        y=0;
    }
    console.log(index);
}
var lista_ = document.getElementsByClassName("list-group-item 1");
var tab = [];
var index=0;
var i;
var aux=0;
var aux_1;
var k=0;
function seleccion(){
    const nacionalidad1 = document.getElementsByClassName("list-group list-group-flush")[0];
    const imagen = document.getElementsByTagName("img")[0];
    for(i=0;i<lista_.length;i++){
        tab.push(lista_[i].innerHTML);
    }
    for(i=0;i<lista_.length;i++){
        lista_[i].onclick = function(){
            index=tab.indexOf(this.innerHTML);
            console.log(this.innerHTML+"index="+index);
            lista_[index].style.backgroundColor="blue";
            lista_[aux].style.backgroundColor="white";
            aux=index;
            aux_=this.innerHTML;
            const filtrado = formula1.filter(function(item){
                return item.piloto==`${aux_}`;
            });
            var na = filtrado.map(function(item){
                const datos=[`<li class="list-group-item 1" style-type="none" id="t1" onclick="seleccion()">${item.nacionalidad}</li>`,`<li class="list-group-item 1" style-type="none" id="t1" onclick="seleccion()">${item.escuderia}</li>`,`<li class="list-group-item 1" style-type="none" id="t1" onclick="seleccion()">${item.titulos}</li>`];
                return datos.join("");
            });
            nacionalidad1.innerHTML=na;
            if(y==1){
                k=index;
                imagen.src=`imagen/f1/${k}.jpg`;
            }else
            if(y==2){
                k=index+7;
                imagen.src=`imagen/f1/${k}.jpg`;
                
            }else if(y==3){
                k=index+14;
                imagen.src=`imagen/f1/${k}.jpg`;
            }
        }
    }
}
