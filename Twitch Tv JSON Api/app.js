$(document).ready(function(){
    var streamers = ["ESL_SC2", "OgamingSC2", "Freecodecamp"];
    for(var i=0; i<streamers.length; i++){
        var api = "https://api.twitch.tv/kraken/streams/"+streamers[i]+"?client_id=azvg4pan99xg4pvtivp6gg1voyamus4";

        $.getJSON(api, function(data){
            if(data.stream === null){
                 $("#logo").append("<img src='https://goo.gl/ln4y4l' width80 height='80' style='border-radius:50px;'></img><br><br><br>");
                 $("#channel").append("<a href='https://www.twitch.tv/"+streamers[i-1]+"' target='_blank'><h4>"+streamers[i-1]+"</h4></a><br><br><br><br><br>");
                 $("#status").append("<h4><em>Offline</em></h4><br><br><br><br><br>");
                 $("#oflogo").append("<img src='https://goo.gl/ln4y4l' width='80' height='80' style='border-radius:50px;'></img><br><br><br>");
                 $("#ofchannel").append("<a href='https://www.twitch.tv/"+streamers[i-1]+"' target='_blank'><h4>"+streamers[i-1]+"</h4></a><br><br><br><br><br>");
                 $("#ofstatus").append("<h4><em>Offline</em></h4><br><br><br><br><br>");
            }
            else{
                $("#logo").append("<img width='80' height='80' style='border-radius:50px;' src="+data.stream.channel.logo+"></img><br><br><br>");
                $("#channel").append("<a href="+data.stream.channel.url+" target='_blank'><h4>"+data.stream.channel.display_name+"</h4></a><br><br><br><br><br>");
                $("#status").append("<h4><em>Online</em></h4><br><br><br><br><br>");
                $("#ologo").append("<img width='80' height='80' style='border-radius:50px;' src="+data.stream.channel.logo+"></img><br><br><br>");
                $("#ochannel").append("<a href="+data.stream.channel.url+" target='_blank'><h4>"+data.stream.channel.display_name+"</h4></a><br><br><br><br><br>");
                $("#ostatus").append("<p>"+data.stream.channel.status+"</p><br><br><br>");
            }
        });
    }
});