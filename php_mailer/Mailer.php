<?php

require 'mailer/PHPMailerAutoload.php';


$mail = new PHPMailer;

$mail->isSMTP();

$mail->Host = 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Username = 'cruisetours.by@gmail.com'; // логин от вашей почты
$mail->Password = 'lund rgap hjex picn'; // пароль от почтового ящика
$mail->SMTPSecure = 'tls';
$mail->Port = '587';

$mail->CharSet = 'UTF-8';
$mail->From = 'cruisetours.by@gmail.com'; // адрес почты, с которой идет отправка
$mail->FromName = 'site'; // имя отправителя
$mail->addAddress('cruisetours.by@gmail.com', 'Имя');
$mail->addCC('cruisetours.by@gmail.com');

$mail->isHTML(true);

// $mail->Subject = 'Письмо с aokhs.ru';
// $mail->header = $_POST['name'];
// $mail->Body = $_POST['city'];
// $mail->Body = $_POST['email'];
// $mail->AltBody = $_POST['ask'];

$mail->Subject = 'Вопрос с сайта';
$mail->Body = 'Пользователь:' . ' ' . $_POST['name'] . '<br />' . 'Номер отправителя: ' . ' ' . $_POST['tel_number'] . '<br />' . 'Вопрос:' . ' ' . $_POST['ask'] . '<br />' . ' Обратна связь:' . ' ' . $_POST['radio'];


// $mail->SMTPDebug = 1;

if ($mail->send()) {
	echo 'Письмо отправлено';
} else {
	echo 'Письмо не может быть отправлено. ';
	echo 'Ошибка: ' . $mail->ErrorInfo;
}



