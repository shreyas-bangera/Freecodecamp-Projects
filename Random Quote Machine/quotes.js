/*$(document).ready(function(){
      $.getJSON("https://crossorigin.me/http://www.quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("p").append(a[0].content + "<p>— "+"<em>"+ a[0].title +"</em>"+"</p>")
  
  });

  $('.btn').click(function() {
    location.reload();
  });

});*/

var cur="";
var ath="";
  function getq(){
   $.ajax({
        headers: {
            'X-Mashape-Key': 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V',
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
        success: function (response) {
            var r = JSON.parse(response);
            cur=r.quote;
            ath="-"+r.author;
          $('#quotes').animate({ opacity: 0 }, 500, function () {
                $(this).animate({ opacity: 1 }, 500);
                $('#quotes').text('"'+r.quote+'"');
            });
            $('#quotes').animate({ opacity: 0 }, 500, function () {
                $(this).animate({ opacity: 1 }, 500);
                $('#at').html("--"+r.author);
            });
        }
         
});
   }

$(document).ready(function(){ 
    getq();
 $(".btn").on("click",function(){
    getq();
    });
  });

