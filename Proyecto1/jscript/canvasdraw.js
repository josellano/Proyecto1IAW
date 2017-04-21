function drawCucha(colorT,colorP,formaT,ventana) {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	
	ctx.setTransform(1,0,0,1,0,0);
	ctx.clearRect(0,0,canvas.width,canvas.height);

	drawFloor(ctx);

	drawBack(ctx,formaT);
	drawWallR(ctx,formaT);
	drawWallL(ctx,colorP,formaT);


	switch(formaT) {
		default:
			drawRoofR(ctx,colorT);
			drawFront(ctx,colorP,formaT);
			drawRoofL(ctx,colorT);
			break;
		case 1:
			drawFront(ctx,colorP,formaT);
			drawRoofA(ctx,colorT);
			break;
	}

	if(ventana!="ninguna")
		drawWindow(ctx,colorP,ventana);
}

function drawFloor(ctx){
	ctx.setTransform(2,1,2,0,75,275);

	var grd=ctx.createLinearGradient(0,0,100,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,"white");

	ctx.fillStyle=grd;
	ctx.fillRect(0,0,50,76);
}

function drawWallL(ctx,color,forma) {
	ctx.setTransform(1,0.5,0,-1,75,275);

	var grd=ctx.createLinearGradient(-50,0,200,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,color);

	ctx.fillStyle=grd;

	switch(forma) {
		default:
			ctx.fillRect(0,0,100,125);
			break;
		case 1:
			ctx.fillRect(0,0,100,100);
			break;
	}
	
}

function drawWallR(ctx,forma) {
	ctx.setTransform(1,0.5,0,-1,225,275);
	ctx.fillStyle='#000000';
	
	switch(forma) {
		default:
			ctx.fillRect(0,0,100,125);
			break;
		case 1:
			ctx.fillRect(0,0,100,175);
			break;
	}
}

function drawBack(ctx,forma) {
	ctx.setTransform(1,0,0,1,75,275);

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(150,0);

	switch(forma) {
		default:
			ctx.lineTo(150,-125);
			ctx.lineTo(75,-185);
			ctx.lineTo(0,-125);
			break;
		case 1:
			ctx.lineTo(150,-175);
			ctx.lineTo(0,-100);
			break;
	}

	ctx.closePath();

	ctx.fillStyle='#000000';
	ctx.fill();
}

function drawFront(ctx,color,forma) {
	ctx.setTransform(1,0,0,1,175,325);

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(35,0);
	ctx.lineTo(35,-70);
	ctx.arc(75,-70,40,1*Math.PI,0*Math.PI);
	ctx.lineTo(115,0);
	ctx.lineTo(150,0);

	switch(forma) {
		default:
			ctx.lineTo(150,-125);
			ctx.lineTo(75,-185);
			ctx.lineTo(0,-125);
			break;
		case 1:
			ctx.lineTo(150,-175);
			ctx.lineTo(0,-100);
			break;
	}

	ctx.closePath();

	ctx.fillStyle=color;
	ctx.fill();
}

function drawRoofL(ctx,color) {
	ctx.setTransform(1,0.5,-1.25,1,130,80);

	var grd=ctx.createLinearGradient(-50,0,100,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,color);

	ctx.fillStyle=grd;
	ctx.fillRect(0,0,130,60);
}

function drawRoofR(ctx,color) {
	ctx.setTransform(1,0.5,1.25,1,130,80);
	ctx.fillStyle=color;
	ctx.fillRect(0,0,130,60);
}

function drawRoofA(ctx,color) {
	ctx.setTransform(1,0.5,-2,1,210,90);

	var grd=ctx.createLinearGradient(-50,0,100,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,color);

	ctx.fillStyle=grd;
	ctx.fillRect(0,0,130,80);
}

function drawWindow(ctx,color,ventana){
	ctx.setTransform(1,0.5,0,-1,125,240);

	var grd=ctx.createLinearGradient(-50,0,200,0);
	grd.addColorStop(0,"grey");
	grd.addColorStop(1,"lightblue");

	ctx.fillStyle=grd;

	if(ventana=="redonda"){
			ctx.beginPath();
			ctx.arc(0,0,20,0,2*Math.PI);
			ctx.closePath();	

			ctx.fill();

			var grad = ctx.createRadialGradient(0,0,18, 0,0,22);
		    grad.addColorStop(0, color);
		    grad.addColorStop(0.5, 'white');
		    grad.addColorStop(1, color);
		    ctx.strokeStyle = grad;
		    ctx.lineWidth = 6;

		    ctx.stroke();
	}
	else
		if(ventana=="cuadrada"){
			var grd2=ctx.createLinearGradient(-50,0,200,0);
			grd2.addColorStop(0,"black");
			grd2.addColorStop(1,color);
			ctx.fillStyle=grd2;
			ctx.fillRect(-35,-25,70,50);

			ctx.fillStyle=grd;
			ctx.fillRect(-25,-15,50,30);
	}
}