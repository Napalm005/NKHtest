$(function() {
	ymaps.ready(init);

	function init () {
		var myMap = new ymaps.Map('map', {
				center: [55.42799452489201,37.11405999999998],
				zoom: 15,
				controls: []
			}),
			myPlacemark = new ymaps.Placemark([55.42799452489201,37.12205999999998], {});


		myPlacemark.options.set({
			iconLayout: 'default#image',
			iconImageHref: 'img/map-mark.svg',
			iconImageSize: [20, 33],
			iconImageOffset: [-7, 7],
			hideIconOnBalloonOpen: false
		});

		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');

		if ($(window).outerWidth() < 600) {
			myMap.behaviors.disable('drag');
		}
	}
})

