$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    $("#submit").click(function(){
        var searchTerm = $("#searchTerm").val();
        var api = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?"
        $.getJSON(api, function(data){
           for(var i=0; i<10; i++){
                if(data[1][i] === undefined){
                    $("#contents").prepend("<h3 style='color:black;'>No results found for <em>"+searchTerm+"</em> :(</a></h3><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
                    break;
                }
                else{
                    $("#contents").prepend("<h3><a target='_blank' style='padding:5px;color:black;' href="+data[3][i]+">"+data[1][i]+"</a></h3>");
                }
           }
           $("#dataValue").prepend("<p>"+data[2]+"<p><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
        });
    });

});