document.getElementById("icing-colour-brown").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-green").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-red").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-yellow").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-white").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-blue").addEventListener("click", pipingcolour);
document.getElementById("icing-colour-pink").addEventListener("click", pipingcolour);



function pipingcolour(id) {

	if(document.getElementById(this.id).checked) {
		clearBorder();
		document.getElementById(this.id).closest("div").style.border = "3px solid red";
	}
}

function clearBorder() {
		document.getElementById("brownthumbnail").style.border = "none";
		document.getElementById("greenthumbnail").style.border = "none";
		document.getElementById("redthumbnail").style.border = "none";
		document.getElementById("yellowthumbnail").style.border = "none";
		document.getElementById("whitethumbnail").style.border = "none";
		document.getElementById("bluethumbnail").style.border = "none";
		document.getElementById("pinkthumbnail").style.border = "none";
}