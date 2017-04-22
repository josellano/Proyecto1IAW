var sum=0;
function updateSum(precio){
	alert("precio "+precio);
	alert("suma antes "+sum);
	var j= parseInt(precio);
	sum=sum+j;
	alert("despues de sumarle "+sum);
	document.getElementById("total").setAttribute("value",sum);
	
}
