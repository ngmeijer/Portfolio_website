<?php
    if(isset($_POST['submit']))
    {
        $name = $_POST['name'];
        $emailFrom = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $phone = $_POST['phone'];

        $mailTo = "website@nilsmeijer.com";
        $headers = "From: ".$emailFrom;
        $txt = "You have received an email from: ".$name.".\n\n".$message;

        $phonenumber = "Their phone-number is: ".$phone.".\n\n";

        mail($mailTo, $subject, $txt, $headers, $phonenumber);
        header("Location: contact-me.html?emailsent");
    }
?>