
$(document).ready(function (){

 function initialize() {

        var myLatlng = new google.maps.LatLng(latitude, longitude);
  
        var mapOptions = {
          center: myLatlng, 
          zoom: 17, 
          scrollwheel: false
        };

        var map = new google.maps.Map(document.getElementById('destination-map'),
            mapOptions);

        var image = "<%= asset_path 'tweety.jpg'%>"     
	      var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      icon: image
      });

	  var contentString = '<h2>Machu Picchu</h2>' + '<p>This is the coolest place on earth, you guys.</p>';
	  var infowindow = new google.maps.InfoWindow({
   content: contentString
       });

	  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
 });
}

  google.maps.event.addDomListener(window, 'load', initialize);

      });