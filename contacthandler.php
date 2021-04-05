<?php


$femail = tmlspecialchars($_POST['email']);
$fsubject = tmlspecialchars($_POST['subject']);
$fcontents = tmlspecialchars($_POST['contents']);









$to = "kiran_nn@kiranpl.com";
$subject = "Contact form submitted";

$message = "
<html>
<head>
<title>Contact form submitted.</title>
</head>
<body>
<p>Look at the table for the details.</p>
<table>
<tr>
<th>Email</th>
<th>Subject</th>
<th>Contents</th>
</tr>
<tr>
<td>"$femail"</td>
<td>"$fsubject"</td>
<td>"$fcontents"</td>

</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <admin@kiranpl.com>' . "\r\n";

mail($to,$subject,$message,$headers);

header("Location: index.html?req=formsubmit");
die();

?>
