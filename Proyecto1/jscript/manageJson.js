var cucha = {  }
	
function newCucha() {
	cucha['tamaño']='null';
	saveCucha();
}

function reloadCucha() {
	var x=localStorage.getItem("JSONcucha");
    if(!x)
		newCucha();
}

function saveCucha() {
    localStorage.setItem("JSONcucha", cucha);
}

function modifyJson(atr,value){
	cucha[atr]=value;
	saveCucha();
}
