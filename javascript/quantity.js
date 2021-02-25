document.getElementById("plus").addEventListener("click", QuantityPlus);
document.getElementById("minus").addEventListener("click", QuantityMinus);
var quantity = document.getElementById("quantity").value;

function QuantityPlus() {
	quantity = parseInt(quantity) + 1;
	document.getElementById("quantity").value = quantity;
	document.getElementById("quantity-negative").style.visibility = "hidden";
}

function QuantityMinus() {
	if(quantity <= 1) {
		document.getElementById("quantity-negative").style.visibility = "visible";
	}else {
		quantity = parseInt(quantity) -1;
		document.getElementById("quantity").value = quantity;
		document.getElementById("quantity-negative").style.visibility = "hidden";
	}
}