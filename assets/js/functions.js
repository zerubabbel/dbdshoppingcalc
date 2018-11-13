$( document ).ready(function() {

  // Get started!
  $('#addToListButton').click(function() { 
		console.log('Hello');
		$('#inputFieldsArea').append('<strong>Item Price <div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text">$</span></div><input type="text" class="form-control" aria-label="Item Price"><div class="input-group-append"><span class="input-group-text"></span></div></div>');
	}); 
});
