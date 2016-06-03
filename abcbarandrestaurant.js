
$(function(){

	// kapag nagclick sa checkbox ng menu, i-enable or disable yung input
	$('.menucheck').click(function(){
  	
    // $(this) - ibig sabihin  "itong element na clinick mo". 
    // $(this).is(':checked') - so ibig sabihin  "itong element na clinick mo is checked?"
  	if($(this).is(':checked')){
    	// so kung may check yung  checkbox, kukunin yung next na input at tanggalin yung disabled
    	$(this).next('input').prop('disabled', false);
    }
    else{
    	// pero kung hindi nakacheck yung box, idisable yung susunod na input, at tanggalin yung value
    	$(this).next('input').prop('disabled', true).val('');
    }
  });
  
  
  // kapag nagclick ng button
  $('#receiptbutton').click(function(){
  	var totalprice, totalnumber, salmon, roast, tbone, ribeye, wagyu, discount, discountprice, rice, drink;
    
    
    // Let's get and display the customer info
    name = $('#customername').val();
    number = $('#customernumber').val();
    
    
    
    // gagawa ng <p> tag na may customername at iaappend(dugtong sa loob) ng "receiptbox"
    $('#receiptbox').append('<p>Name: '+name+'</span></p>');
    $('#receiptbox').append('<p>Number: '+number+'</span></p>');
    
    
    
    // let's create the orders part
    $('#receiptbox').append('<h3>Order</h3>');
    
    
    // kunin yung mga quantity ng nasa menu
    salmon = parseInt($('#salmonquantity').val());
    roast = parseInt($('#roastquantity').val());
    tbone = parseInt($('#tbonequantity').val());
    ribeye = parseInt($('#ribeyequantity').val());
    wagyu = parseInt($('#wagyuquantity').val());
    
    
    // default discountprice, totalprice, and totalnumber are zero, set it
    totalnumber = 0;
    totalprice = 0;
    discountprice = 0 
    
    
    
    // check kung may quantity yung salmon
    if(salmon > 0){
    	// gagawa  ng <p> tag na may details ng salmon order at iaappend(dugtong sa loob) ng "receiptbox"
      $('#receiptbox').append('<p>'+salmon+'x Salmon <span>P'+ (salmon * 250) +'</span></p>');
      
      // update the totalprice and totalnumber of orders
      totalnumber = totalnumber + salmon;
      totalprice = totalprice + (salmon * 250);
    }
    
    
    
    // check kung may quantity yung roast
    if(roast > 0){
    	// gagawa  ng <p> tag na may details ng roast order at iaappend(dugtong sa loob) ng "receiptbox"
      $('#receiptbox').append('<p>'+roast+'x Roast <span>P'+ (roast * 300) +'</span></p>');
      
      // update the totalprice and totalnumber of orders
      totalnumber = totalnumber + roast;
      totalprice = totalprice + (roast * 300);
    }
    
    
    
    // check kung may quantity yung tbone
    if(tbone > 0){
    	// gagawa  ng <p> tag na may details ng tbone order at iaappend(dugtong sa loob) ng "receiptbox"
      $('#receiptbox').append('<p>'+tbone+'x Tbone <span>P'+ (tbone * 280) +'</span></p>');
      
      // update the totalprice and totalnumber of orders
      totalnumber = totalnumber + tbone;
      totalprice = totalprice + (tbone * 280);
    }
    
    
    
    // check kung may quantity yung ribeye
    if(ribeye > 0){
    	// gagawa  ng <p> tag na may details ng ribeye order at iaappend(dugtong sa loob) ng "receiptbox"
      $('#receiptbox').append('<p>'+ribeye+'x Ribeye <span>P'+ (ribeye * 320) +'</span></p>');
      
      // update the totalprice and totalnumber of orders
      totalnumber = totalnumber + ribeye;
      totalprice = totalprice + (ribeye * 320);
    }
    
    
    
    // check kung may quantity yung wagyu
    if(wagyu > 0){
    	// gagawa  ng <p> tag na may details ng wagyu order at iaappend(dugtong sa loob) ng "receiptbox"
      $('#receiptbox').append('<p>'+wagyu+'x Wagyu <span>P'+ (wagyu * 350) +'</span></p>');
      
      // update the totalprice and totalnumber of orders
      totalnumber = totalnumber + wagyu;
      totalprice = totalprice + (wagyu * 350);
    }
    
    
    
    // lets check if rice or(||) was checked
    if( $('#addrice').is(':checked') || $('#adddrink').is(':checked') ){


    // let's create the addOn part
    $('#receiptbox').append('<h3>Add-ons</h3>');
    	
    	
      // let's compute for the rice, then add it to our totalprice
      if( $('#addrice').is(':checked') ){
      	riceprice = totalnumber * 20;
        totalprice = totalprice + riceprice
        
        // then let's write rice addon on receipt
        $('#receiptbox').append('<p>'+totalnumber+'x Rice <span>P'+ riceprice +'</span></p>');
      }
      
      
      
      // let's compute for the drink, then add it to our totalprice
      if( $('#adddrink').is(':checked') ){
      	drinkprice = totalnumber * 30;
        totalprice = totalprice + drinkprice
        
        // then let's write drink addon on receipt
        $('#receiptbox').append('<p>'+totalnumber+'x Drink <span>P'+ drinkprice +'</span></p>');
      }
    }
    
    
    // let's compute for subtotal
    $('#receiptbox').append('<p class="subtotal"><b>Sub-total<span>P'+ totalprice +'</span></b></p>');
    
    
    // let's compute for the discount
    if($("input[type='radio']:checked").val()){
    
    	// let's create the discount part
    	$('#receiptbox').append('<h3>Discount</h3>');
    
    
    
    	// if may nakacheck na radio, kunin  yung value
      discount = $("input[type='radio']:checked").val();
      
      
      
      // check if discount value is 'senior'
      if(discount == 'senior'){
      	// if senior, display senior discount detail in receipt and update the discount price
      	$('#receiptbox').append('<p>20% Senior discount <span>P'+ (totalprice * 0.2) +'</span></p>');
        discountprice = totalprice * 0.2;
      }
      
      
      
      // check if discount value is 'loyalty'
      if(discount == 'loyalty'){
      	// if loyalty, display loyalty discount detail in receipt and update the discount price
      	$('#receiptbox').append('<p>10% Loyalty discount <span>P'+ (totalprice * 0.1) +'</span></p>');
        discountprice = totalprice * 0.1;
      }
      
      
      
      // check if discount value is 'birthday'
      if(discount == 'birthday'){
      	// if birthday, display birthday discount detail in receipt and update the discount price
      	$('#receiptbox').append('<p>10% Birthday discount <span>P'+ (totalprice * 0.1) +'</span></p>');
        discountprice = totalprice * 0.1;
      }
    }
    
    
    
    // display the total bill
    $('#receiptbox').append('<p id="totalbill">Total <span>P'+ (totalprice - discountprice) +'</span></p>');
    
    
    
    // pagkatapos isetup yung bill, itatago na yung 'menubox' at ididisplay na yung 'receiptbox'
    $('#menubox').slideUp();
    $('#receiptbox').slideDown();
    
  })
  
  
})