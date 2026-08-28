<?php
/************* Ajax Contact Form 1.0 *****************************/
/*
Released by AwesomePHP.com, under the GPL License, a
copy of it should be attached to the zip file, or
you can view it on http://AwesomePHP.com/gpl.txt
*/
/************* Ajax Contact Form 1.0 *****************************/

/* Send Contact Form to (comma separated) */
$toEmails = 'voice.of.the.sea.1911@gmail.com';

/* Site Name */
$siteName = 'Voice of the Sea';

/* Contact Form email Subject */
$subject = 'Mail From VotS Contact Form';

/* Email subject for users making the contact*/
$subjectUser = 'Thank you for contacting Voice of the Sea';

/* Email message to send users making the contact*/
$userMessage = "This email is to confirm that Voice of the Sea has recieved your contact request.";
/* Email message add-on if also sending variables (information) */
$userMessageVariables = 
"Here is the information you sent us:\n<br />
-------------------------------------------------\n<br />";

/* Thank you message on HTML page */
$thankYouNote = 'Your Contact Form information has been sent to Voice of the Sea. Thank you.';

/* Send Thank you Email to sender */
$sendThankYou = true;

/* Include form variables in Thank you Email */
$sendVariable = true;

/* Email field to send thank you to */
$thankYouEmailField = 'Your_Email_Address';

/* Do you want to require any fields ?*/
$REQUIRE[] = 'Your_Name';
$REQUIRE[] = 'Your_Email_Address';
$REQUIRE[] = 'Your_Message';

/* Email fields to check for validation */
/*
If you want an email field to be required, it should
also be on the REQUIRE list
*/
$EMAILFIELD[] = 'Your_Email_Address';


?>