<!DOCTYPE html>

<html>
<head>
	<title>Cuchas</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<link rel="icon" type="image/png" href="source/iconoPestaña.png" />

	<link id="estilo1" rel="stylesheet" type="text/css" href="css/estilo1.css">

	<script src="js/manageJson.js" type="text/javascript"></script>
	<script src="js/updateSum.js" type="text/javascript"></script>
	<script src="js/stylechange.js" type="text/javascript"></script>
	<script src="js/canvasdraw.js" type="text/javascript"></script>
	<script src="js/pageInit.js" type="text/javascript"></script>
	<script src="js/defaultModels.js" type="text/javascript"></script>
	<script src="js/imageDownload.js" type="text/javascript"></script>
	<script src="js/reimg.js"></script>
</head>
<body onload="pageInit()">
	<header>

	  	<h1><img name="hueso" src="source/hueso1.png" style="float: left; margin-left: 30px;">La cucha que su perro desea...
	  	<img name="hueso" src="source/hueso1.png" style="float: right; margin-right: 30px;"></h1>

	</header>

	<div id="menu" class="row">
		<div class="col-lg-6">
			<div class="col-lg-4">
				<h3>Tamaño</h3>
					<input type="radio" name="tamaño" value="chica" title="100" > Chica(0.8m x 0.5m)<br>
					<input type="radio" name="tamaño" value="mediana" title="200" checked> Mediana(1m x 0.6m)<br>
					<input type="radio" name="tamaño" value="grande" title="300"> Grande(1.2m x 0.8m)<br>
					<br>
			</div>
			<div class="col-lg-4">
				<img id="imgMat" src="source/madera.jpg" style="float: left; margin-top:5px; margin-right: 10px; width:16px; height:150px;">
				<h3>Material</h3>
					<input type="radio" name="material" value="madera" title="150" checked> Madera<br>
					<input type="radio" name="material" value="chapa" title="100"> Chapa<br>
					<input type="radio" name="material" value="fibra" title="200"> Fibra de vidrio<br>
					<input type="radio" name="material" value="plastico" title="50"> Plastico<br>
					<br>
			</div>
			<div class="col-lg-4">
				<h3>Ventana</h3>
					<input type="radio" name="ventana" value="redonda" title="100" > Redonda<br>
					<input type="radio" name="ventana" value="cuadrada" title="100" checked> Cuadrada<br>
					<input type="radio" name="ventana" value="ninguna" title="0" > Ninguna<br>
					<br>
			</div>

			<div class="row">
				<div class="col-lg-12">
					<ul id="tipoPestaña"  class="nav nav-tabs">
						<li class="active"><a data-toggle="tab" href="#paredes">Paredes</a></li>
						<li><a data-toggle="tab" href="#techo">Techo</a></li>
					</ul>
				</div>
				<div class="tab-content">
					<div id="paredes" class="tab-pane fade in active">
						<div class="col-lg-6 navUnit">
							<h3>Estilo</h3>
								<input class="2colores" type="radio" name="estilo" value="rayado" title="200"> Rayado<br>
								<input class="1color" type="radio" name="estilo" value="plano" title="150" checked> Plano<br>
								<br>
						</div>

						<div class="col-lg-6 navUnit">
							<h3>Color</h3>
								<input id="colorPared1" type="color" name="favcolor" value="#0000ff" title="100" onchange="reDraw()"><br>
								<br><input id="colorPared2" type="color" name="favcolor" value="#0000ff" title="200" onchange="reDraw()">
						</div>
					</div>

					<div id="techo" class="tab-pane fade">
						<div class="col-lg-6 navUnit">
							<h3>Forma</h3>
								<input type="radio" name="forma" value="un agua" title="100" checked> Un agua<br>
								<input type="radio" name="forma" value="dos aguas" title="200"> Dos aguas<br>
								<br>
						</div>

						<div class="col-lg-6 navUnit">
							<h3>Color</h3>
								<input  id="colorTecho" type="color" name="favcolor" value="#ff0000" title="100" onchange="btnFunctions(id,value)">
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="col-lg-6">
			<div class="col-lg-8">
				<canvas id="canvas" width="400" height="400" style="background-color:#BBBBBB"></canvas>
				<center><button type="button" class="btn1" onclick="downloadImage()">Descargar</button></center>
			</div>
			<div class="col-lg-4">
				<h4>Modelos Predeterminados</h4>
				<div class="btn-group-vertical" role="group">
					<button type="button" class="btn1" onclick="cheapModel()" >Economica</button>
					<button type="button" class="btn1" onclick="classicModel()">Clasica</button>
					<button type="button" class="btn1" onclick="ejecutiveModel()">Ejecutiva</button>
				</div>
			</div>

		</div>

		<p>Costo Total <input class="textBox" type="text" id="total" readonly="true" value=0> <p>
	</div>

	<footer>
		<!--<a  onclick="footerInformation()" > ¿Quienes somos? </a><br />-->
		<a class="linkFooter" href="" onclick="footerInformation()">Quienes somos</a>

		<div class="dropup">
		<button class="btn" type="button" data-toggle="dropdown">Estilo
		<span class="caret"></span></button>
			<ul class="dropdown-menu">
			<li><a href="#" onclick="reStyle('estilo1')">Estilo 1</a></li>
			<li><a href="#" onclick="reStyle('estilo2')">Estilo 2</a></li>
			<li><a href="#" onclick="noStyle()">Sin Estilo</a></li>
			</ul>
		</div>
	</footer>

	</body>
</html>
