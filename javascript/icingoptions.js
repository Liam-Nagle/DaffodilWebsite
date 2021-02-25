
	document.forms[0].checkbox0.addEventListener("click", displayUpdate);
	var textInput = document.querySelector('#icing-text');

	function displayUpdate() {
		if(this.checked) {
			document.querySelector('#icing-text').closest('.row1').style.display = "flex";
			document.querySelector('.icing-colour-selector').closest('.row1').style.display = "flex";
			document.querySelector('.product-add').style.display = "inline-block";
			textInput.setAttribute('required', 'required');
		}else {
			document.querySelector('#icing-text').closest('.row1').style.display = "none";
			document.querySelector('.icing-colour-selector').closest('.row1').style.display = "none";
			document.querySelector('.product-add').style.display = "none";
			textInput.removeAttribute('required');
		}
	}