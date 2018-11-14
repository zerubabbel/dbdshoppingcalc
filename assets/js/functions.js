$( document ).ready(function() {

  // Get started!
  $('#addToListButton').click(function() { 
		console.log('Hello');
		$('#inputFieldsArea').append('<div class="inputBlock"><strong>Item Price</strong><div class="input-group mb-3 mr-2"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="text" class="form-control" aria-label="Item Price"><div class="input-group-append mr-2"><span class="input-group-text rounded-right"></span></div><button class="btn-danger rounded remove"><i class="fa fa-trash"></i></button></div></div>');
	}); 

  $('#inputFieldsArea').on('click', '.remove', function() {
  		console.log("Hello");
		$(this).closest('.inputBlock').remove();
	});



});
