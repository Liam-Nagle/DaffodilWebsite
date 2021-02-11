
	document.forms[0].checkbox0.addEventListener("click", displayUpdate);
	var textInput = document.querySelector('#icing-text');

	function displayUpdate() {
		if(this.checked) {
			document.querySelector('#icing-text').closest('.row1').style.display = "flex";
			textInput.setAttribute('required', 'required');
		}else {
			document.querySelector('#icing-text').closest('.row1').style.display = "none";
			textInput.removeAttribute('required');
		}
	}