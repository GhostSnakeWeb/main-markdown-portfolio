<?php

// Константы
define('SITE_NAME', 'Персональный сайт Владислава Кондракова');
define('ADMIN_EMAIL', 'info@websweet.ru');
define('FORM_SUBJECT', 'Обратная связь с сайта');

//Script Foreach
$c = true;

// For POST method only!

// Save Basic Form parametrs
// $project_name = trim($_POST["project_name"]);
// $admin_email  = trim($_POST["admin_email"]);
// $email_from  = trim($_POST["email"]);
// $form_subject = trim($_POST["form_subject"]);

// Serialize form fields - that filled-in by User
if (isset($_POST['contacts-form'])) {
	$name = trim($_POST['name']);
	$email = trim($_POST['email']);
	$skype = trim($_POST['skype']);
	$phone = trim($_POST['phone']);
	$message = trim($_POST['message']);
	
	$totalMessage = "Имя: " . $name . "\n
Email: " . $email . "\n
Skype: " . $skype . "\n
Телефон: " . $phone ."\n
Сообщение: " . $message . ".";

	// Adjusting text encoding
	function adopt($text) {
		return '=?UTF-8?B?'.base64_encode($text).'?=';
	}

	// Preparing header
	// $headers = "MIME-Version: 1.0" . PHP_EOL .
	// "Content-Type: text/plain; charset = utf-8" . PHP_EOL .
	// 'From: '.adopt(SITE_NAME).' <'.$email.'>' . PHP_EOL .
	// 'Reply-To: '.ADMIN_EMAIL.'' . PHP_EOL;

	$headers = "MIME-Version: 1.0" . PHP_EOL . "Content-type: text/plain; charset = utf-8" .
		PHP_EOL . "From:" . adopt(SITE_NAME) . "<" . ADMIN_EMAIL . ">" . PHP_EOL . "Reply-To:" . ADMIN_EMAIL;

	// Sending email to admin
	mail(ADMIN_EMAIL, adopt(FORM_SUBJECT), $totalMessage, $headers );

	// Saving user data in file
	// send_user_data_in_txt_file ($message);
	echo '<div class="contact-form__success">Сообщение отправлено успешно!</div>';
}

?>