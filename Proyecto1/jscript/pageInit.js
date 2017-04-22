function pageInit() {
	reDraw();
	cargarEstilo();
	reloadCucha();
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

function btnFunctions(name,value,precio){
	reDraw();
	modifyJson(name,value);
	updateSum(precio);
}

function changeMat(name,value,precio){
	changeImg();
	modifyJson(name,value);
	updateSum(precio);
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