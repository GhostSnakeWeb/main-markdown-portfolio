$(document).ready(function() {
	// Собственный скрипт прокрутки навигации
	$(".header__inner").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top; // Расстояние от блока до верха всего документа
        $('body,html').animate({scrollTop: top}, 1500); // Количество пикселей на которое была прокручена страница
    });

    // MixItUp
    $('#portfolio-projects').mixItUp();

    // FancyBox - galery
	$(".fancybox").fancybox({
		toolbar: false,
		smallBtn: true,
		infobar: false
    });

    // Валидация формы - jquery.validate.js
    $("#contact-form").validate({
        rules: {
            name: { required: true },
            email: { required: true, email: true },
            message: { required: true }
        },
        messages: {
            name: "Пожалуйста, введите свое имя",
            email: {
                required: "Пожалуйста, введите свой email",
                email: "Email адрес должен быть в формате name@domain.com . Возможно вы ввели email с ошибкой."
            },
            message: "Пожалуйста, введите текст сообщения"
        },
        submitHandler: function(form) {
            ajaxFormSubmit();
        }
    })

    // Отправка письма AJAX
    function ajaxFormSubmit(){
        // Соханяем данные введенные в форму в строку.
        var string = $("#contact-form").serialize(); 
        $.ajax({
            url: 'php/mail.php',
            type: 'POST',
            data: string
        })
        .done(function(html) {
            console.log("success");
            $("#contact-form").slideUp(800);
            $('#answer').html(html);
        })
        .fail(function() {
            console.log("error");
        })
    }
   
});