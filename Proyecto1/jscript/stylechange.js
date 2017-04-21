function reStyle(est) {
	
	if( est=="estilo0"){
			document.getElementById("estilo1").disabled=true;
			guardarEstilo("estilo0");
	}
	else{
		if( est=="estilo1"){
			document.getElementById("estilo1").setAttribute("href","css/estilo1.css");
			guardarEstilo("estilo1");
			cambiarPestañas(est);
		}
		else{
			document.getElementById("estilo1").setAttribute("href","css/estilo2.css");
			guardarEstilo("estilo2");
			cambiarPestañas(est);
		}
			document.getElementById("estilo1").disabled=false;
	}
}

function cambiarPestañas(est){
	
	if( est=="estilo1")
		document.getElementById("tipoPestaña").className="nav nav-tabs centered";
	else
		document.getElementById("tipoPestaña").className="nav nav-pills centered";
}

function noStyle() {
   document.getElementById("estilo1").disabled=true;
   guardarEstilo("estilo0");
}


function cargarEstilo() {
	var x=localStorage.getItem("estiloGuardado");
    if(x)
		reStyle(x);
	else
		reStyle("estilo1");
}

function guardarEstilo(estilo) {
    localStorage.setItem("estiloGuardado", estilo);
    
}
