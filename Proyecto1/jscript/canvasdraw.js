function drawCucha() {
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	drawFloor(ctx);

	drawBack(ctx,0);
	drawWallR(ctx,0);
	drawWallL(ctx,"blue",0);

	if(true){
		drawRoofR(ctx);
		drawFront(ctx,"blue",0);
		drawRoofL(ctx);
	}
	else{
		drawFront(ctx,"blue",1);
		drawRoofA(ctx,"red");
	}

	drawWindow(ctx,0);
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

function drawRoofL(ctx) {
	ctx.setTransform(1,0.5,-1.25,1,130,80);

	var grd=ctx.createLinearGradient(-50,0,100,0);
	grd.addColorStop(0,"black");
	grd.addColorStop(1,"red");

	ctx.fillStyle=grd;
	ctx.fillRect(0,0,130,60);
}

function drawRoofR(ctx) {
	ctx.setTransform(1,0.5,1.25,1,130,80);
	ctx.fillStyle='#550000';
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

function drawWindow(ctx,ventana){
	ctx.setTransform(1,0.5,0,-1,125,240);

	var grd=ctx.createLinearGradient(-50,0,200,0);
	grd.addColorStop(0,"grey");
	grd.addColorStop(1,"lightblue");

	ctx.fillStyle=grd;

	switch(ventana) {
		default:
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.arc(0,0,20,1*Math.PI,4*Math.PI);
			ctx.closePath();

			ctx.fill();
			break;
		case 1:
			ctx.fillRect(-25,-15,50,30);
			break;
	}
}