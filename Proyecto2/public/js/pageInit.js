function pageInit() {
	reDraw();
	cargarEstilo();
	newCucha();
	inputsConfig();
}

function reDraw(){
	var colorT=document.getElementById("colorTecho").value;
	var colorP1=document.getElementById("colorPared1").value;

	var formaT;
    var radioBtns=document.getElementsByName("forma");
	
	for(var i=0;i<radioBtns.length;i++) {
        if(radioBtns[i].checked)
            formaT=radioBtns[i].value;
    }

	var estilo;
    var radioBtns=document.getElementsByName("estilo");
	
	for(var i=0;i<radioBtns.length;i++) {
        if(radioBtns[i].checked)
            estilo=radioBtns[i].value;
    }

	var colorP2;
    if(estilo!="plano"){
    	colorP2=document.getElementById("colorPared2").value;
    }

	var ventana;
    radioBtns=document.getElementsByName("ventana");

    for(var i=0;i<radioBtns.length;i++) {
        if(radioBtns[i].checked)
            ventana=radioBtns[i].value;
    }

	
	drawCucha(colorT,colorP1,colorP2,formaT,estilo,ventana);
}

function btnFunctions(name,value){
	reDraw();
	modifyJson(name,value);
	updateSum();
}

function changeMat(name,value){
	changeImg();
	modifyJson(name,value);
	updateSum();
}

function changeImg(){
	var material;
    var radioBtns=document.getElementsByName("material");
	
	for(var i=0;i<radioBtns.length;i++) {
        if(radioBtns[i].checked)
            material=radioBtns[i].value;
    }

	document.getElementById("imgMat").setAttribute("src","source/"+material+".jpg");
}

function inputsConfig(){
	
	if ( document.readyState == "complete" ) {
		
		var radioBtns=document.getElementsByName("tamaño");
		for(var i=0;i<radioBtns.length;i++) {
			radioBtns[i].setAttribute("onclick","btnFunctions(name,value)");
		}
		
		
		radioBtns=document.getElementsByName("ventana");
		for(var i=0;i<radioBtns.length;i++) {
			radioBtns[i].setAttribute("onclick","btnFunctions(name,value)");
		}
		
		radioBtns=document.getElementsByName("forma");
		for(var i=0;i<radioBtns.length;i++) {
			radioBtns[i].setAttribute("onclick","btnFunctions(name,value)");
		}
		
		
		// setea la configuracion inicial de los botones de material
		radioBtns=document.getElementsByName("material");
		for(var i=0;i<radioBtns.length;i++) {
			radioBtns[i].setAttribute("onclick","changeMat(name,value)");
		}
		// setea funcionalidad de esconderse y mostraarse en el boton de estilos
		(document.getElementsByClassName("1color")[0]).setAttribute("onclick","btnsEstilo(name,value,1)");
		(document.getElementsByClassName("2colores")[0]).setAttribute("onclick","btnsEstilo(name,value,2)");
		
		updateSum(); // lo pongo xq lo habias puesto en el script de index, no se is es necesario
		
	}
	document.getElementById("colorPared2").style.display = 'none'; // para que le boton inicie oculto
	
}

function btnsEstilo(name,value,id){
	
	btnFunctions(name,value);
	
	if( id=="1"){
		document.getElementById("colorPared2").style.display = 'none';
	}
	else{
		document.getElementById("colorPared2").style.display = 'block';
	}
	
}

function footerInformation(){
	var wleft = screen.width - (screen.width)/2;
	var wtop = screen.height - (screen.height)/2;
	var caracteristicas="top="+wtop+" left="+wleft+" height="+300+" width="+200+" resizable=no";
	win=window.open("datos.html","¿Quienes somos?",caracteristicas);
	
}