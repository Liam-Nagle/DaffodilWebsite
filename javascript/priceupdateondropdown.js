$(document).ready(function () {
	$('.size-select').change(function(){
        var price = parseFloat($('.product-price').data('base-price'));
        
        $('.size-select').each(function(i, el) {
            price += parseFloat($('option:selected', el).data('price'));
        });
        
        $('.product-price').text(price.toFixed(2));
	});	
});