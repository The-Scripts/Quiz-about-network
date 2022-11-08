<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->setLanguage('pl', 'PHPMailer/language/phpmailer.lang-pl.php');

//Login: Quiz-About-Network@outlook.com
//Pass: Gz4w8NlDV9y5A%cfgTex
//Y67VA-GSN2A-Y3KLP-MCG3P-AFLRW

try {
    $mail->SMTPDebug = 1;
    $mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'Quiz-About-Network@outlook.com';
    $mail->Password   = 'upmafampjttfwrrv';
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->CharSet = 'UTF-8';
    $mail->setFrom('quiz-hardware-and-network@wp.pl', 'Uczen');
    $mail->addAddress('Quiz-About-Network@outlook.com');
    //$mail->addReplyTo('Quiz-About-Network@outlook.com', 'Uczen');

    $mail->isHTML(true);
    $mail->Subject = 'Wyniki ucznia';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}