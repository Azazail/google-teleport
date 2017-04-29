var camera

$('#loginbutton').click(function() {
  $('#screen1').hide();
  $('#page2').show();
  camera = new JpegCamera("#camera");
  
});














JpegCamera.DefaultOptions.swf_url = "https://cdn.rawgit.com/amw/jpeg_camera/bd3ce3e6/dist/jpeg_camera.swf?raw=true";
      
JpegCamera.DefaultOptions.shutter_mp3_url = "https://cdn.rawgit.com/amw/jpeg_camera/bd3ce3e6/dist/shutter.mp3?raw=true";

JpegCamera.DefaultOptions.shutter_ogg_url = "https://cdn.rawgit.com/amw/jpeg_camera/bd3ce3e6/dist/shutter.ogg?raw=true";


$("#Scan").click(function(){
 
  var snapshot = camera.capture();
  
  snapshot.show(); //Display the snapshot
  
  $("#bar").show();
  snapshot.get_blob(function(blob){
    var url = URL.createObjectURL(blob);
    $("#picture").attr("src",url);
  });
  setTimeout(function(){
    $("#page2").fadeOut();
    $('#page3').fadeIn();
    initialize()
  },5000);
});
 
      function initialize() {
        
        
         panorama = new google.maps.StreetViewPanorama(
            document.getElementById('pano'),
            {
              position: {lat:40.7407389, lng:-74.0017498},
              pov: {heading: 300, pitch: 1},
              zoom: 1
            });
      }


var user ;
$("button").click(function(){
    user = $("#name").val();
   $("h2").html(user);
});
var key = "AIzaSyBhXAtxR7xYorCpS_pA9m2iuv0MAVVDrDU";
$("#eiffletower").click(function(){
var eiffletower = {lat : 48.8584, lng: 2.2945};
panorama.setPosition(eiffletower);
});
$("#forbiddencity").click(function(){
var forbiddencity ={lat:39.9163, lng:116.3972};
panorama.setPosition(forbiddencity);
});
$("#spaceneedle").click(function(){
var spaceneedle = {lat:47.6205, lng:-122.3493};
panorama.setPosition(spaceneedle);
});
$("#empirestatebuilding").click(function(){
var empirestatebuilding ={lat:40.748, lng:-73.985};
panorama.setPosition(empirestatebuilding);
});
$("#grandcanyon").click(function(){
var grandcanyon ={lat:36.1128, lng:-113.9961};
panorama.setPosition(grandcanyon);
});

$("#colosseum").click(function(){
var colosseum ={lat:41.8902, lng:12.4922};
panorama.setPosition(colosseum);
});
var place ;
$("#url").click(function(){
    place =$("#location").val();
    

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({address: place} ,function(results){
      var area = results[0].geometry.location;
      panorama.setPosition(area);
        });
    

});
$(document).ready(function(){
$("#collapse").click(function(){
    $("#info").toggle();

});jsonG("48.8566","2.3522");
});
function jsonG (lat,lon){
    var url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=imperial&appid=1ae7bfb22f272700d9eafbc95c46f842";
    $.getJSON(url, function(response) { 
          decode(response);
    }).fail (function(response) {
        console.error(response);
        });
        
}

function decode (response){
  var temp= response['main']['temp'];
  $(".temperature").html(temp);
  var location= response['name'];
  $(".location").html(location);
   var pressure= response['main']['pressure'];
  $(".pressure").html(pressure);
   var humidity= response['main']['temp'];
  $(".humidity").html(humidity);
}