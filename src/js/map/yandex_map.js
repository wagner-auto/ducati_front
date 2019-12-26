var myMap;

// Дождёмся загрузки API и готовности DOM.

ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center: [60.082884, 30.246657], //
        zoom: 12,
        controls: ['zoomControl']
    });
    myPlacemark1 = new ymaps.Placemark([60.094238, 30.254832], {
        //balloonContent: 'Центр Выборгский'
        balloonContentHeader: '<strong>Дукати Вагнер</strong>',
        balloonContentBody: 'Санкт-Петербург, Выборгское ш., 352А',
    }, {
        // preset: 'islands#blueShoppingCircleIcon',
        // iconColor: '#78b833'
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.behaviors.disable('scrollZoom');
}