    var changePrice = function changePrice(amt, state){
        var curPrice = $('.product-price').text();
        curPrice = curPrice.substring(1, curPrice.length);
        if(state==true){
            curPrice = parseInt(curPrice) + parseInt(amt);
        }else{
            curPrice = parseInt(curPrice) - parseInt(amt);
        }
        curPrice = '£' + curPrice + '.00';
        $('.product-price').text(curPrice);
    }
    $(function(){
        $('#check-0').on('change', function(){
            var itemPrice = $('span[for="check-span"]').text();
            itemPrice = itemPrice.substring(1, itemPrice.length);
        changePrice(itemPrice, $('#check-0').is(':checked'));
        });

    });