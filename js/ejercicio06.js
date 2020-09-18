const punoP = ["Carabaya","Sandia","Melgar","Azangaro","San Antonio de Putina","Lampa","San Roman","Huancane","Moho","Puno","El Collao","Chucuito","Yunguyo"];
const cuscoP = ["La Convención","Anta", "Urubamba","Calca","Paruro","Cusco","Paucartambo","Paruro","Acomayo","Quispicanchis","Canchis","Chumbivilcas","Canas","Espinar"];
const tacnaP = ["Tacna","Candarave","Jorge Basadre", "Tarata"];
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
//a. Añadir Elementos HTML con createElement: Options de una Lista Desplegable
var selec1 = document.getElementById("s1");
function puno(){
    for(j=0;j<cuscoP.length;j++){
        selec1.remove(selec1[i]);
    }
    var i=0;
    for(i=0;i<punoP.length;i++){
        const lista = document.createElement("option");
        lista.text=punoP[i];
        selec1.add(lista);
    }
}
function cusco(){
    console.log(selec1[0]);
    for(j=0;j<punoP.length;j++){
        selec1.remove(selec1[i]);
    }
    var i=0;
    for(i=0;i<cuscoP.length;i++){
        const lista = document.createElement("option");
        lista.text=cuscoP[i];
        selec1.add(lista);
    }
}
//b. Mostrar la imagen que selecciono en la lista desplegable
/*
La propiedad options.selectedIndex retorna el indice de la option elegida,
Si s es el SELECT, entoces s.options.selectedIndex es el indice seleccionado;
Si el usuario eligio la primera opcion, el indice será 0.
*/
function paisaje(){
    const s = document.getElementById("s2").selectedIndex;
    const z = document.getElementById("s2").options;
    const aux = z[s].index;
    const imagen = document.getElementsByTagName("img")[0];
    switch(aux){
        case 0:
            imagen.src='imagen/puno/puno1.jpg';
            break;
        case 1:
            imagen.src='imagen/puno/puno2.jpg';
            break;
        case 2:
            imagen.src='imagen/puno/puno3.jpg';
            break;
    }
}
//c. Añadir Elementos HTML con createElement: Options de una Lista Desplegable a partir de la seleccion de una options de una Lista Desplegable.
function listaregiones(){
    const s = document.getElementById("s3").selectedIndex;
    const z = document.getElementById("s3").options;
    const aux_ = z[s].index;
    const añadir = document.getElementById("s4");
    switch(aux_){
        case 0:
            for(j=0;j<tacnaP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(j=0;j<cuscoP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(i=0;i<punoP.length;i++){
                const añadir = document.getElementById("s4");
                const lista = document.createElement("option");
                lista.text=punoP[i];
                añadir.add(lista);
            }
            break;
        case 1:
            for(j=0;j<tacnaP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(j=0;j<punoP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(i=0;i<cuscoP.length;i++){
                const añadir = document.getElementById("s4");
                const lista = document.createElement("option");
                lista.text=cuscoP[i];
                añadir.add(lista);
            }
            break;
        case 2:
            for(j=0;j<punoP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(j=0;j<cuscoP.length;j++){
                añadir.remove(añadir[j]);
            }
            for(i=0;i<tacnaP.length;i++){
                const añadir = document.getElementById("s4");
                const lista = document.createElement("option");
                lista.text=tacnaP[i];
                añadir.add(lista);
            }
            break;
    }
}
//d. Añadir Elementos HTML con createElement: Options de una Lista Desplegable desde una lista procesada de una lista de objetos (formula1)
var pilotos = formula1.map(function(item){
    return item.piloto;
});
var escuderias = formula1.map(function(item){
    return item.escuderia;
});
var nacionalidad = formula1.map(function(item){
    return item.nacionalidad;
});
var campeones = formula1.filter(function(item){
    return item.titulos>0;
});
var filtrar = campeones.map(function(item){
    return item.piloto;
});
var añadir = document.getElementById("s5");
function pilotos_(){
    for(j=0;j<nacionalidad.length;j++){
        añadir.remove(nacionalidad[j]);
    }
    for(j=0;j<escuderias.length;j++){
        añadir.remove(escuderias[j]);
    }
    for(j=0;j<filtrar.length;j++){
        añadir.remove(filtrar[j]);
    }
    for(i=0;i<pilotos.length;i++){
        const lista = document.createElement("option");
        lista.text=pilotos[i];
        añadir.add(lista);
    }
}
function escuderia_(){
    for(j=0;j<nacionalidad.length;j++){
        añadir.remove(nacionalidad[j]);
    }
    for(j=0;j<pilotos.length;j++){
        añadir.remove(pilotos[j]);
    }
    for(j=0;j<filtrar.length;j++){
        añadir.remove(filtrar[j]);
    }
    for(i=0;i<pilotos.length;i++){
        const lista = document.createElement("option");
        lista.text=escuderias[i];
        añadir.add(lista);
    }
}
function nacionalidades_(){
    for(j=0;j<pilotos.length;j++){
        añadir.remove(pilotos[j]);
    }
    for(j=0;j<escuderias.length;j++){
        añadir.remove(escuderias[j]);
    }
    for(j=0;j<filtrar.length;j++){
        añadir.remove(filtrar[j]);
    }
    for(i=0;i<pilotos.length;i++){
        const lista = document.createElement("option");
        lista.text=nacionalidad[i];
        añadir.add(lista);
    }
}
function campeones_(){
    for(j=0;j<nacionalidad.length;j++){
        añadir.remove(nacionalidad[j]);
    }
    for(j=0;j<pilotos.length;j++){
        añadir.remove(pilotos[j]);
    }
    for(j=0;j<escuderias.length;j++){
        añadir.remove(escuderias[j]);
    }
    for(i=0;i<filtrar.length;i++){
        const añadir = document.getElementById("s5");
        const lista = document.createElement("option");
        lista.text=filtrar[i];
        añadir.add(lista);
    }
}

/*
const pilotos = formula1.map(function(item){
    return item.piloto;
});
*/