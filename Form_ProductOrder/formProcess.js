/************* Ajax Contact Form 1.0 *****************************/
/*
Released by AwesomePHP.com, under the GPL License, a
copy of it should be attached to the zip file, or
you can view it on http://AwesomePHP.com/gpl.txt
*/
/************* Ajax Contact Form 1.0 *****************************/


/* holder for form variables */
var stringVars='';

/* Function to clear form */
function clearForm()
{
	for(i=0; i< document.contact.elements.length; i++)
	{
		if(document.contact.elements[i].type.search(/text/) != -1)
		{
			document.contact.elements[i].value='';
		}
	}
}

/* Function to submit form */
function submitForm()
{
	if(document.getElementById('errorSpanTR').style.display == 'none')
	{
		document.getElementById('errorSpanTR').style.display='inline';
	}
	
	document.getElementById('errorSpan').innerHTML = '<img src="pleaseWait.gif">';
	
	for(i=0; i< document.contact.elements.length; i++)
	{
		switch(document.contact.elements[i].type)
		{
			case 'text':
			case 'textarea':
			case 'radio':
			case 'select-one':
			stringVars += escape(document.contact.elements[i].name)+'='+escape(document.contact.elements[i].value)+'&';
			break;		
			case 'checkbox':
			if (document.contact.elements[i].checked){
				temp = document.contact.elements[i].name;
				temp = temp.replace(/\[]/,'');
				stringVars += escape(temp)+'='+escape(document.contact.elements[i].value)+'&';	
			}
		}
	}
	doCall();
}
function doCall()
{
	http.open("GET", 'contact.php?' + stringVars, true);
	http.onreadystatechange = handleHttpResponse;
	http.send(null);
}

function handleHttpResponse()
{
	if (http.readyState == 4)
	{
		var response = http.responseText;				
		document.getElementById('errorSpan').innerHTML = response;
		
		if(response.search(/<!---->/) != -1){
			clearForm();
		}
	}
}

function getHTTPObject()
{ 
	var xmlhttp;
	if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
		try {
			xmlhttp = new XMLHttpRequest();
		} catch (e) {
			xmlhttp = false;
		}
	}
	return xmlhttp;
}
var http = getHTTPObject(); 