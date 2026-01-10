function initMap() {
    var location = {lat: TU_LATITUD, lng: TU_LONGITUD};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}