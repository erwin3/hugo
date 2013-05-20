/* author: hmaelzer
 * date: 20.05.2013
 */

function ActivateFunctionality() 
{
	var count = 1 ;
	$(".figure").click(function () 
 {
   // copy the figure, atribute false deletes the click-event
   var copy1 = $(this).clone(false);
   var copy2 = $(this).clone(false);   
   var newId = "fig_" + count + "_"+ copy1.find('img').attr("alt") ;
   
   // add a unique ID
   copy1.attr("id", newId );
   copy2.attr("id", newId );
   count = count+1;
   
   // remove class figure as we dont want a duplicate of this copy
   copy1.removeClass("figure");
   copy2.removeClass("figure");
   
   // add the class figureOnBoard                    
   copy1.addClass("figureOnBoard");
   copy2.addClass("figureOnBoard");
   
   //copy.addClass("dead");
   
   // set draggable - so it can be dragged - jquery UI
   copy1.draggable();
   copy1.find('img').css('width' , '50px');
   copy1.find('img').css('height', '50px');
   
   copy1.bind('click', function () 
   {
   	  // rotate on click
   	  if ($(this).hasClass('dead'))
   	  {
   	  	  $(this).removeClass("dead");
   	  	}
   	  	else
   	  	{
   	  		 $(this).addClass("dead");
   	  	}
   	});
   	
   var textArea = document.createElement("textarea");
   textArea.style.width = "500px" ;
   textArea.style.maxWidth = "500px" ;
   textArea.style.height = "50px" ;
   	copy2.append(textArea);
   	
   	// add this copy to the container div
   	$("#figureadder").append(copy1);
   	$("#figurepanel").append(copy2);
 });

 $(".figureOnBoard").click(function () 
 {
   	// rotate on click
 	  $(this).addClass("dead");
 });

}