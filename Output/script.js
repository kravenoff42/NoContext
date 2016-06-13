

$(document).ready(function(){
  var currentQuote="";

	$("#button").click(function(){

    $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
      $("#quote").text('"'+ a[0].content +'"');
      $("#speaker").text('-'+ a[0].title +'(Sort of)');
      currentQuote=a[0].content+' -'+ a[0].title +'(Sort of)';
  });
});
/*    $.ajax({
      //url: 'http://www.stands4.com/services/v2/quotes.php?uid=1001&tokenid=tk324324324&searchtype=RANDOM',
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='
      dataType: 'json',
      type: 'get',
      cache: true,
      success: function(data){
        console.log(data);
        var quote = data[0].content;
        var speaker = data[0].title;
        $("#quote").text('"'+ quote +'"');
        $("#speaker").text('-'+ speaker +'(Sort of)');
        currentQuote=quote+' -'+ speaker +'(Sort of)';
      }

      var item = Math.floor(Math.random()*47);
        $("#quote").text('"'+quotes.main[item].quote+'"');
        $("#speaker").text("-"+quotes.main[item].speaker+"(Sort of)");
        currentQuote='"'+quotes.main[item].quote+'" '+ quotes.main[item].speaker +'(Sort of)';


    });
    */
  });
  $("#link").click(function(){
      if (currentQuote!=""){
        $(this).attr("href", "http://twitter.com/home?status="+ currentQuote);
      }
      if (currentQuote == ""){
        $(this).attr("href", "http://twitter.com/home?status=Check out -No Context- a cool new quote generator!");
      }
  });
});
