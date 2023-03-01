
//oculta la barra de navegacion

let ubicacionprincipal = window.pageYOffset;

window.onscroll = function(){
    let desplazamiento = window.pageYOffset;
    if(ubicacionprincipal >= desplazamiento){
        document.getElementById('navbar').style.top = '0';
    }

    else{
        document.getElementById('navbar').style.top = '-100px';
    }

    ubicacionprincipal = desplazamiento;
}

