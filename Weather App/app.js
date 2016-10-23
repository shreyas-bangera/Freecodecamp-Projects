$(document).ready(function(){

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            $("#data").html("latitute :" + position.coords.latitude);
        });
    }



   var api = "http://api.openweathermap.org/data/2.5/weather?q=mangalore&APPID=7e8a59c4f3e3fb01a5fd5a09e62d7b7e";
   $.getJSON(api, function(data){
       //alert(data.coord.lon);
   });
});