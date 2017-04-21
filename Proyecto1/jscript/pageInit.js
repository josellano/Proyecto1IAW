function pageInit() {
	reDraw();
	cargarEstilo();
	reloadCucha();
}

function reDraw(){
	var colorT=document.getElementById("colorTecho").value;
	var colorP=document.getElementById("colorPared").value;

	var formaT="";
    var radioBtns=document.getElementsByName("forma");
	
	if(radioBtns[0].checked)
        formaT=0;
    else
    	formaT=1;

	var ventana="";
    radioBtns=document.getElementsByName("ventana");

    for(var i=0;i<radioBtns.length;i++) {
        if(radioBtns[i].checked)
            ventana=radioBtns[i].value;
    }

	drawCucha(colorT,colorP,formaT,ventana);
}

function btnFunctions(name,value){
	
		reDraw();
	
		modifyJson(name,value);
	
}
