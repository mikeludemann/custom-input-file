document.querySelector("html").classList.add('js');

var fileInput = document.querySelector( ".input-file" ), 
	button = document.querySelector( ".input-file-trigger" ),
	fileName = document.querySelector(".file-return");

button.addEventListener( "keydown", function( event ) { 

	if ( event.keyCode == 13 || event.keyCode == 32 ) { 

      fileInput.focus(); 
      
   } 
   
});
button.addEventListener( "click", function( event ) {

   fileInput.focus();
   
   return false;
   
}); 

fileInput.addEventListener( "change", function( event ) {

	var text = this.value;
	var operatorElementSlash = text.lastIndexOf('/');
   var operatorElementBackSlash = text.lastIndexOf('\\');

   var result;
   
	if(operatorElementSlash > -1){

		result = this.value.substring(operatorElementSlash + 1);

		console.log(result);

      fileName.innerHTML = result;
      
	} else if (operatorElementBackSlash > -1){

		result = this.value.substring(operatorElementBackSlash + 1);

		console.log(result);

      fileName.innerHTML = result;
      
   } 
   
}); 
