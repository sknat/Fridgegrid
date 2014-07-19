$.mobile.defaultPageTransition="none";




$("#button1" ).click(function() {
   navigator.geolocation.getCurrentPosition(onSuccess, onError, {'enableHighAccuracy':true,'timeout':50000});

});

function onSuccess(position) {       

 var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 15,
        center: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });    
var myPosition=new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
var markerOne = new google.maps.Marker({
position: myPosition,
map: map,
draggable:true,
});
}

function onError(err) {
 $("#button1").text("error "+err.code);
}
