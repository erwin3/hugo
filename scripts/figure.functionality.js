/* author: hmaelzer
 * date: 20.05.2013
 */

function ActivateFunctionality() 
{
	$(".figure").click(function () 
 {
   // copy the figure, atribute false deletes the click-event
   var copy = $(this).clone(false);
   
   // add a unique ID
   copy.attr("id", copy.attr("id") + "-1");
   
   // remove class figure as we dont want a duplicate of this copy
   copy.removeClass("figure");
   
   // add the class figureOnBoard                    
   copy.addClass("figureOnBoard");
   
   //copy.addClass("dead");
   
   // set draggable - so it can be dragged - jquery UI
   copy.draggable();
   copy.find('img').css('width' , '50px');
   copy.find('img').css('height', '50px');
   
   copy.bind('click', function () 
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
   	
   	// add this copy to the container div
   	$("#figureadder").append(copy);
 });

 $(".figureOnBoard").click(function () 
 {
   	// rotate on click
 	  $(this).addClass("dead");
 });

}