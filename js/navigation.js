$(document).ready(function() {
	// Мобильная навигация
	var navToggleButton = $('#navigation-button'),
		navBlock = $('.navigation__list'),
		navBlockOpen = 'navigation__list--open',
		navLink = $('.navigation__list a');
	
	// Функция смена вида "бургера" и появления меню
	function navButtonToggle() {
		navBlock.toggleClass(navBlockOpen);
		if (navToggleButton.hasClass('active')) {
		  navToggleButton.removeClass('active')
		} else {
		  navToggleButton.addClass('active')
		}
	}

	navToggleButton.on('click', function(event) {
		event.preventDefault();
		navButtonToggle()
	});

	// Скрытие меню при нажатии по ссылке
	navLink.on('click', function() {
		if (navBlock.hasClass(navBlockOpen)) {
			navButtonToggle()
		}
		navBlock.removeClass(navBlockOpen)
	});
});