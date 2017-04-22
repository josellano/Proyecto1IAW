var sum=0;
function updateSum(precio){
	var j= parseInt(precio);
	sum=sum+j;
	document.getElementById("total").setAttribute("value",sum);	
}
