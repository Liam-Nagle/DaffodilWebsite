
	var item1Price = parseFloat($('.icing-price').data('price'));
	var basePrice = parseFloat($('.product-price').data('base-price'));
	var curPrice = basePrice;
	var selectPrice = 0;
	document.forms[0].checkbox0.addEventListener("click", PriceUpdate);
	document.forms[0].selection0.addEventListener("click", PriceUpdate);
    function PriceUpdate(){
		$('.size-select').change(function(){
			$('.size-select').each(function(i, el) {
				selectPrice = parseFloat($('option:selected', el).data('price'));
				});
			});	
		if(document.forms[0].checkbox0.checked) {
			curPrice = item1Price + selectPrice + basePrice;
		}else {
			curPrice = selectPrice + basePrice;
		}			
		$('.product-price span').text(curPrice.toFixed(2));
   }
	