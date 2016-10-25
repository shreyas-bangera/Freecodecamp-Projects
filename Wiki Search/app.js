    $(document).ready(function(){
        $("#search").on('keyup',function(){
            var searchKey=document.getElementById("search").value;
            $("#result").html("");
            document.getElementById("dataHeader").style.visibility='visible';
            if(searchKey==="")
            {
                document.getElementById("dataHeader").style.visibility='hidden';
            }
            else
            {
                $.getJSON('https://en.wikipedia.org/w/api.php?action=opensearch&search='+searchKey+'&format=json&callback=?', function(data){
                for (var i in data) {
                    if(data[1][i] === undefined)
                    {
                        $("#result").html("");
                        $('#result').append('<div id="articles" class="well"><h3 class="text-center">No Results.....</h3></div>');
                        break;
                    }
                    else
                    {
                        //$("#result").animate({'margin-top': '-8px'}, 500, "linear");
                        $('#result').append('<div id="articles" class="well"><a class="title" id="alink" href="'+data[3][i]+'"target="_blank"><h3 class="text-center">' + data[1][i] + '</h3></a><p class="cont">' + data[2][i] + '</p></div>');

                    }
                }
                $("#articles").animate({'margin-top': '-238px'}, 400, "linear");
                });
            }
    });
        
    $('[data-toggle="tooltip"]').tooltip();

    $(".btn").click(function(){
       window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
    });


});
