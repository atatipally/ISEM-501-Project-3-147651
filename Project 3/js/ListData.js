


$(function(){
     
    		$('.tab-section').hide();
    		$('#tabs a').bind('click', function(e){
    			$('#tabs a.current').removeClass('current');
    			$('.tab-section:visible').hide();
    			$(this.hash).show();
    			$(this).addClass('current');
    			var current=$(this).addClass('current');
    			
    			e.preventDefault();
    		}).filter(':first').click();
    	});



function setData(){}

function showcheckbox(){
	
	
	       $(".list_cbox").css('visibility','visible'); 
	      
	     /*  
	       $("#menudelete").css('visibility','visible'); 
	       $("#menucancel").css('visibility','visible'); 
*/
	      /* 
	      
	    */
	  
	

}

function hidecheckbox(){
    $(".list_cbox").css('visibility','hidden'); 

	 $("#menudelete").css('visibility','hidden'); 
	 $("#menucancel").css('visibility','hidden'); 
	 $("#menudel").css('visibility','visible'); 
	 $("#menuadd").css('visibility','visible'); 
	 
	 $("input:checkbox[class=list_cbox]:checked").each(function () {
		 chk_Id=$(this).attr("id");
		 document.getElementById(chk_Id).checked = false;
	 });
}

   
 