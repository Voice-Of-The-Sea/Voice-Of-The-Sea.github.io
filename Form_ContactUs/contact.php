<?php
/************* Ajax Contact Form 1.0 *****************************/
/*
Released by AwesomePHP.com, under the GPL License, a
copy of it should be attached to the zip file, or
you can view it on http://AwesomePHP.com/gpl.txt
*/
/************* Ajax Contact Form 1.0 *****************************/

/* Get Configure File */
require_once('config.php');

/*
Function to check email
*/
function checkMail($mail)
{
	 return preg_match('/^[.\w-]+@([\w-]+\.)+[a-zA-Z]{2,6}$/', $mail); 
}

/*
Function send mail
*/
function send_mail($returnName,$returnEmail,$fromName,$fromEmail,$subject,$message,$to)
{
	$headers = "Return-Path: $returnName <$returnName>\r\n"; 
	$headers .= "From: $fromName <$fromEmail>\r\n"; 
	$headers .= "Content-Type: text/html; charset=utf-8;\n\n\r\n"; 
	return @mail ($to,$subject,$message,$headers);
}

/*
Check required fields
*/
foreach($REQUIRE as $fieldName)
{
	if($_GET[$fieldName] == NULL)
	{
		die('Required Field Missing: '.$fieldName);
	}
}

/*
Check email fields 
*/
foreach($EMAILFIELD as $fieldName)
{
	if(checkMail($_GET[$fieldName]) == false)
	{
		die('Invalid Email Address: '.$fieldName);
	}
}

/*
Process message
*/

foreach($_GET as $is => $what)
{
	$message .= "$is => $what\n<br />";
}

/*
Send to owners
*/
$arrayOwners = explode(',',$toEmails);

foreach($arrayOwners as $thisEmail)
{
	send_mail($siteName,$thisEmail,$siteName,$thisEmail,$subject,$message,$thisEmail);
}


/*
Send to users
*/
if($sendThankYou == true)
{
	
	if($sendVariable == true)
	{
		$userMessage .= "\n<br />$userMessageVariables\n<br />$message";
	}
	send_mail($siteName,$_GET[$thankYouEmailField],$siteName,$thisEmail,$subjectUser,$userMessage,$_GET[$thankYouEmailField]);
}

echo $thankYouNote;

echo '<!---->';
?>