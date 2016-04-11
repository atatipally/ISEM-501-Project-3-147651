 var menuarray=
    	   [
    	    		  {"fieldname":"selectcategory","type":"dropdown", "displayfieldname":"Select Category"},	
                      {"fieldname":"ItemName","type":"edittext","displayfieldname":"Item Name"},
                      {"fieldname":"ItemCode","type":"edittext","displayfieldname":"Item Code"},
                      {"fieldname":"Price","type":"edittext","displayfieldname":"Item Price"},
                      {"fieldname":"Image","type":"edittext","displayfieldname":"Image"},
                      {"fieldname":"Ingradiants","type":"edittext","displayfieldname":"Ingredients"},
                      {"fieldname":"Preparation Time","type":"edittext","displayfieldname":"Preparation Time"}
             ];
     var  menuarray_tablename="menutable";
     var  menuarray_tablenamecolumns="item_name, item_code,item_price, item_image, item_ingridents,  item_prepare_duration";
    		  
     var categoriesarray=[
                          	{"fieldname":"CategoryName","type":"edittext","displayfieldname":"Category Name"},
                          	{"fieldname":"CategoryImg","type":"edittext","displayfieldname":"Category Image"}
                          ];
     
     
     var customerarray=[
                    {"fieldname":"CustName","type":"edittext","displayfieldname":"Customer Name"},
                    {"fieldname":"SchoolName","type":"edittext","displayfieldname":"School Name"},
                    {"fieldname":"Latittude","type":"edittext","displayfieldname":"Latittude"},
                    {"fieldname":"Longitude","type":"edittext","displayfieldname":"Longitude"}
             ];  
     
     var userarray=[
                    {"fieldname":"UserName","type":"edittext","displayfieldname":"User Name"},
                    {"fieldname":"Password","type":"edittext","displayfieldname":"Password"},
                    {"fieldname":"selectschool","type":"dropdown", "displayfieldname":"Select School"}	
                    
             ]; 
     var fieldsarray=[
                      {"fieldname":"Dealname","type":"edittext", "displayfieldname":"Deal Name"},
                      {"fieldname":"DealDescription","type":"edittext", "displayfieldname":"Deal Description"},
                      {"fieldname":"Dealstartdate","type":"datepicker", "displayfieldname":"Deal StartDate"},
                      {"fieldname":"Dealenddate","type":"datepicker", "displayfieldname":"Deal Enddate"},
                      {"fieldname":"Dealprice","type":"edittext", "displayfieldname":"Deal Price"},
                      {"fieldname":"selectmenu","type":"dropdown", "displayfieldname":"Select Menu"}, 
                      {"fieldname":"DealImage","type":"edittext","displayfieldname":"Image"}
                     ];
 
     
     function addPopup(header,fieldsarray,tablename,id){
    	 
 			//alert("responseText edit"+responseText);
 			document.getElementById("addDataToPopup").innerHTML = "";
 			
 			$('<div >').attr({'data-role':'header','id':'popup-header'}).append('<div id="logo" style="float: left;"><img  src="img/Logo.png" width="50px;" height="25px;" style="margin-top: 7px; margin-right: 5px; margin-left: 5px; padding: 5px;"></div><p id="screenTitle">'+header+'</p>').appendTo('#addDataToPopup');
 	     	$('<br>').appendTo('#addDataToPopup');
 	     	$('<div id="ContentDiv" class="div_border">').appendTo('#addDataToPopup');
 	     	var form=$('<form id="popupform" style = "width: 100%; "  method="post" action="newservlet" >');
 	     	var $content = "";
 	     	table=$('<table style = "width: 100%;" rules="rows" cellpadding="0"  cellspacing="0" ></table>');
 	     	
 	     	//alert(fieldsarray.length);
 	     	for(var i=0;i<fieldsarray.length;i++){
 	     	
 	     	if(fieldsarray[i].type=="edittext"){
 	     		
 	     	   $content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="var'+i+'"> '+fieldsarray[i].displayfieldname+'  </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id='+fieldsarray[i].fieldname+' name='+fieldsarray[i].fieldname+' required><input type="hidden" name="hiddencolid" id="hiddencol" value="null"><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
 	     	   
 	     	}else if(fieldsarray[i].type=="textarea"){
 	     	
 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="var'+i+'"> '+fieldsarray[i].displayfieldname+' </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="textarea" rows="10" cols="10"  id='+fieldsarray[i].fieldname+' name='+fieldsarray[i].fieldname+' required><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'><input type="hidden" name="hiddencolid" id="hiddencol" value="null"></td></tr>';
 	     	
 	     	}else if(fieldsarray[i].type=="datepicker"){
 	     	
 	     		$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="var'+i+'"> '+fieldsarray[i].displayfieldname+' </label></td><td><input type="date" data-role="datebox" id='+fieldsarray[i].type+' name='+fieldsarray[i].fieldname+' placeholder="Set date" required/><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'><input type="hidden" name="hiddencolid" id="hiddencol" value="null"></td></tr>';     
 	     	}else if(fieldsarray[i].type=="dropdown"){
 	         	
 	     		if(tablename == "menu_table"){
 	     			$content += categoriesDropdown("pizza","Pizza","Select Item"); 	     			
 	     		}else if(tablename == "deals_table"){
 	     			$content += ToCreateDropDown("Sandwich","Sandwich","Select Item");
 	     		}else if(tablename == "adminlogin_table"){
 	     			$content += schoolsDropdown("Select School","Select School");
 	     		}
 	        		
 	          }
 	     	
 	     	
 	    }
 	     	
 	     	table.append($content);
 	     	
 	     	form.append(table);
 	     	
 	     	var div1=$("#ContentDiv");
 	     	div1.append(form);

 	     	
 	     div1.appendTo('#addDataToPopup');
 	     	
 	     	table=$('<table style = "width: 100%;" rules="rows"></table>');
 	     	table.append('<tr><td style = "width: 50%; padding:10px !important;"><input type="button" value="Cancel" id="cancelpopup" onclick="cancel()" style=" background-color: #1F1F1F;"></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="submit" value="submit" form="popupform"  class="robotomeduimfont" style=" background-color: #1F1F1F;"></td></tr>');
 	     	table.appendTo('#ContentDiv');
 	     	div1.appendTo('#addDataToPopup');
 	     	$("#addDataToPopup").trigger('create');
 	     	
 	     	$('#addDataToPopup').popup('open');
 		
    	 }
  
     $( "#selectmenu" ).change(function() {

		  var text =$( "#selectmenu option:selected" ).text();
		  alert(text);

		 });
     
     function cancel(){
    	 $( "#addDataToPopup" ).popup( "close" );
     }

    
     
     
    function ToCreateDropDown(id,optionsArray,labelname){
    	
    	
    	var content ="";
    	
    	content += '<tr>';
    	content += '<td style = "width: 50%;"><label class="label_data_color"> Select Menu </label></td>'
    	
    	content +='<td style = "width: 50% !important;" >';
    	content +='<select id='+id+' name='+id+' class="my_dropdown" data-inline="true" data-native-menu="false">';
    	
	    	
   		 content +='<option value=Burger name="selectmenu">Burger</option>';
   	
   	 	content +='</select>'
   		content +='</td>'
   			return content;
    	
    			
    }
function categoriesDropdown(id,optionsArray,labelname){
    	
    	
    	var content ="";
    	
    	content += '<tr>';
    	content += '<td style = "width: 50%;"><label class="label_data_color"> Select Menu </label></td>'
    	
    	content +='<td style = "width: 50% !important;" >';
    	content +='<select id='+id+' name='+id+' class="my_dropdown" data-inline="true" data-native-menu="false">';
    	
    	//for (var i = 0; i < optionsArray.length; i++){
	    	
   		 content +='<option value=Pizzas name="selectmenu"> Pizzas </option>';
   	
   	 //}
   	 	content +='</select>'
   		content +='</td>'
   			return content;
    	
    			
    }

function schoolsDropdown(id,labelname){
	
	
	var content ="";
	
	content += '<tr>';
	content += '<td style = "width: 50%;"><label class="label_data_color"> Select Menu </label></td>'
	
	content +='<td style = "width: 50% !important;" >';
	content +='<select id='+id+' name='+id+' class="my_dropdown" data-inline="true" data-native-menu="false">';
	
	
    	
		 content +='<option value="John Adams Middle School" name="selectschool"> John Adams Middle School </option>';
		 content +='<option value="Santa Monica College" name="selectschool"> Santa Monica College </option>';
		 content +='<option value="Paul River Cahrter School" name="selectschool"> Paul River Cahrter School </option>';
	
	
	 	content +='</select>'
		content +='</td>'
			return content;
	
			
}
 function ToCreateEditDropDown(id,optionsArray,labelname,selecteditemname){
    	
    	
    	var content ="";
    	
    	content += '<tr>';
    	content += '<td style = "width: 50%;"><label class="label_data_color"> Select Menu </label></td>'
    	
    	content +='<td style = "width: 50% !important;" >';
    	content +='<select id='+id+' name='+id+' class="my_dropdown" data-inline="true" data-native-menu="false">';
    	
   		 content +='<option value="Sandwich" name="selectmenu" selected>Sandwich</option>';

   	 	content +='</select>'
   		content +='</td>'
   			return content;
    	
    			
    }
 
 function editCategoriesDropDown(id,optionsArray,labelname,selecteditemname){
 	
 	
 	var content ="";
 	
 	content += '<tr>';
 	content += '<td style = "width: 50%;"><label class="label_data_color"> Select Categories </label></td>'
 	
 	content +='<td style = "width: 50% !important;" >';
 	content +='<select id='+id+' name='+id+' class="my_dropdown" data-inline="true" data-native-menu="false">';
 	
 	for (var i = 0; i < optionsArray.length; i++){
	    	if(optionsArray[i].cat_name==selecteditemname){
		 content +='<option value='+optionsArray[i].cat_id+' name="selectmenu" selected> '+ optionsArray[i].cat_name +'</option>';
	    	}else{
	      		 content +='<option value='+optionsArray[i].menu_id+' name="selectmenu" > '+ optionsArray[i].cat_name +'</option>';

	    	}
	 }
	 	content +='</select>'
		content +='</td>'
			return content;
 	
 			
 }
    
 function EditPopup(header,fieldsarray,tablename,id){
    	
    	var id1=id.toString();
    	
    	
    	 $.ajax({
	 			url : 'Populatedata',
	 			data : {
	 				id : id1,
	 				tablename :tablename 
	 			},
	 			success : function(responseText) {
	 				
	 			
	 			document.getElementById("addDataToPopup").innerHTML = "";
	 	     	$('<div >').attr({'data-role':'header','id':'popup-header'}).append('<div id="logo" style="float: left;"><img  src="img/Logo.png" width="50px;" height="25px;" style="margin-top: 7px; margin-right: 5px; margin-left: 5px; padding: 5px;"></div><p id="screenTitle">'+header+'</p>').appendTo('#addDataToPopup');
	 	     	$('<br>').appendTo('#addDataToPopup');
	 	     	$('<div id="ContentDiv" class="div_border">').appendTo('#addDataToPopup');
	 	     	var form=$('<form id="popupform" style = "width: 100%; "  method="post" action="newservlet" >');
	 	     	var $content = "";
	 	     	table=$('<table style = "width: 100%;" rules="rows" cellpadding="0"  cellspacing="0" ></table>');
	 	     	if(tablename=='deals_table'){
	 	     		
	 	     	var date=responseText[0].DealStartDate;
	 	     	/*alert(date);
	 	     	alert(fieldsarray.length);*/
	 	     	
	 	     	
	 	     	
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Dealname"> Deal Name</label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Dealname" name="Dealname" value=' + responseText[0].DealName +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="DealDescription"> Deal Description </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text"  id="DealDescription" name="DealDescription"><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'><input type="hidden" name="hiddencolid" id="hiddencol" value='+id+'></td></tr>';
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Dealstartdate"> Deal startDate</label></td><td><input type="date" data-role="datebox" id="Dealstartdate"  name="Dealstartdate" placeholder="Set date" required/><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Dealenddate"> Deal Enddate </label></td><td><input type="date" data-role="datebox" id="Dealenddate"  name="Dealenddate" placeholder="Set date" required/><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Dealprice"> Deal Price </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Dealprice" name="Dealprice" ><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="DealImage"> Image </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="DealImage" name="DealImage"><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	/*<input name="mydate" id="mydate" type="date" data-role="datebox" />
*/
	 	     	$content +=ToCreateEditDropDown("selectmenu",responseText[0].menuInfo,"Select Menu",responseText[0].selecteditemname);
	 	     	}else if(tablename=='adminlogin_table'){
	 	     		/*alert("admin");
	 	     		alert(responseText[0].username);
 	 	     	alert(fieldsarray.length);*/
 	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="UserName"> User Name</label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="UserName" name="UserName" value= '+ responseText[0].username +' ><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'><input type="hidden" name="hiddencolid" id="hiddencol" value='+id+'></td></tr>';
 	 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Password"> Password </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Password"  name="Password" value='+responseText[0].password+'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
 	 	     	
	 	     		
	 	     	}else{
	 	     		$content +=editCategoriesDropDown("selectcategory",responseText[0].catInfo,"Select Menu",responseText[0].selected_cat_name);
	 	     		$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="ItemName"> Item Name</label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="ItemName" name="ItemName" value=' + responseText[0].item_name +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td><input type="hidden" name="hiddencolid" id="hiddencol" value='+id+'></tr>';
		 	     	
		 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="ItemCode"> Item Code </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text"  id="ItemCode" name="ItemCode" value=' + responseText[0].item_code +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'><input type="hidden" name="hiddencolid" id="hiddencol" value='+id+'></td></tr>';
		 	     	
		 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Price"> Item Price </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Price" name="Price" value=' + responseText[0].item_price +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
		 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" class="label_data_color" for="Image"> Image </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Image" name="Image" value=' + responseText[0].item_image +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
		 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Ingradiants"> Ingredients </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Ingradiants" name="Ingradiants" value=' + responseText[0].item_ingridents +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
		 	     	$content += '<tr><td style = "width: 50%;  border-bottom: none;"><label class="label_data_color" for="Preparation"> Preparation Time </label></td><td style = "width: 50%; padding:10px !important;" align="left"><input type="text" id="Preparation" name="Preparation" value=' + responseText[0].item_prepare_duration +'><input type="hidden" name="hiddencol" id="hiddencol" value='+tablename+'></td></tr>';
	 	     	}
	 	
	 	     	table.append($content);
	 	     	
	 	     	form.append(table);
	 	     	
	 	     	var div1=$("#ContentDiv");
	 	     	div1.append(form);
	 	     	
	 	     	$('#Dealname').val(responseText[0].DealName);
	 	     	$('#DealDescription').val(responseText[0].DealDescription);
	 	     	$('#DealImage').val(responseText[0].Dealimg);
	 	     	/*$('#Dealstartdate').val(responseText[0].DealStartDate);
	 	     	$('#Dealenddate').val(responseText[0].DealEndDate);*/
	 	     	$('#Dealprice').val(responseText[0].DealPrice);
	 	     	//$('#DealImage').val(responseText[0].Dealimg);
	 	     	$('#UserName').val(responseText[0].username);
	 	     	$('#Password').val(responseText[0].password);
	 	      
	 	     	
	 	     	
	 	     	$('#ItemName').val(responseText[0].item_name);
	 	     	$('#ItemCode').val(responseText[0].item_code);
	 	     	$('#Price').val(responseText[0].item_price);
	 	     	/*$('#Dealstartdate').val(responseText[0].DealStartDate);
	 	     	$('#Dealenddate').val(responseText[0].DealEndDate);*/
	 	     	$('#Image').val(responseText[0].item_image);
	 	     	$('#Ingradiants').val(responseText[0].item_ingridents);
	 	     	//$('#DealImage').val(responseText[0].Dealimg);
	 	     	$('#Preparation').val(responseText[0].item_prepare_duration);
	 	     	div1.appendTo('#addDataToPopup');
	 	     	
	 	     	table=$('<table style = "width: 100%;" rules="rows"></table>');
	 	     	table.append('<tr><td style = "width: 50%; padding:10px !important; "><input type="button" value="Cancel" id="cancelpopup" onclick="cancel()" style=" background-color: #1F1F1F;"></td><td style = "width: 50%;  padding:10px !important;" align="left"><input type="submit" value="Submit" form="popupform" class="robotomeduimfont" style=" background-color: #1F1F1F;"></td></tr>');
	 	     	table.appendTo('#ContentDiv');
	 	     	div1.appendTo('#addDataToPopup');
	 	     	$("#addDataToPopup").trigger('create');
	 	     	
	 	     	$('#addDataToPopup').popup('open');
	 			
	 			
	 			
	 			}
	 			
	 		}); 
		 
				 
    	
    	
    } 
 
 
 function showHint(str)
	{
	 
	    	 $.ajax({
	 			url : 'Populatedata',
	 			data : {
	 				tablename : "menu_cat_table",
	 				id : str.value
	 			},
	 			success : function(responseText) {
 				var $content ="";
	 		    	
	 				$content='<div class="row" style="margin-left: 25px; margin-right: 25px">';
	 				
					
	 				for (var i = 0; i < responseText.length; i++){
	 			    
	 					$content+='<div class="col-xs-6 col-md-4">';
						$content+='<div class="panel panel-primary">';
						$content+='<div class="panel-body">';
						$content+='<div class="row">';
						$content+='<div class="col-md-1" style="float: left;">';
						$content+='<div id="hidethis" class="checkbox_mitems hidediv" style="width:25px; float:left; height:50px;text-align: left; vertical-align: middle;">';
						$content+='<input type="checkbox" id="'+responseText[i].menu_id+'" value="'+responseText[i].menu_id+'" name="chek_menu" class="list_cbox"   />';
						$content+='</div>';
						$content+='</div>';
						$content+='<div class="col-md-4" style="float: left;">';
						$content+='<img  src="'+ responseText[i].item_image +'" id="list_img"  height="100px" width="100px" >';
						$content+='</div>';
						$content+='<div class="col-md-6" style="float: left">';
						$content+='<label class="robotomeduimfont" style="font-size: 13px;font-weight: bold;">'+ responseText[i].item_name +'</label>';
						$content+='<label class="robotomeduimfont_desc" >'+ responseText[i].item_ingridents +'</label>';
						$content+='<label class="robotolightfont">'+ responseText[i].item_price +'</label>';

						$content+='</div>';
						$content+='<div class="col-md-1">';
						$content+='<span onclick="EditPopup('+"'Menu Edit'"+',menuarray,'+"'menu_table'"+','+responseText[i].menu_id+')" aria-hidden="true"><i class="fa fa-pencil-square-o fa-lg"></i></span>';
						
						$content+='</div>';
						$content+='</div>';
						$content+='</div>';

						$content+='</div>';
						$content+='</div>';
	 					}
	 		    	
	 	
	 		    


							
							$content+='</div>';
						    $(".datapanels").empty();
							$(".datapanels").append($content);
					    
	 		    
	 			}
	    	 
	 		});
  	
	}
 
 