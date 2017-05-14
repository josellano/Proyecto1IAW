function downloadImage(){
	var can=document.getElementById("canvas");
	ReImg.fromCanvas(can).downloadPng("miCucha.png");
}