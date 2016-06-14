

$(document).ready(function(){
  var currentQuote="";

	$("#button").click(function(currentQuote){
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
      type: 'POST', // The HTTP Method
      data: {}, // Additional parameters here
      datatype: 'json',
      success: function(data) {
        
        var obj = $.parseJSON(data);

        var rawquote=obj.quote;

        var quoteArr= rawquote.split(' ');
        var chop= Math.floor(quoteArr.length/2.5);
        var temp= quoteArr.slice(Math.floor(Math.random()*chop), quoteArr.length-Math.floor(Math.random()*chop));
        var misquote=temp.join(' ');
        $("#quote").text('"...'+misquote+'..."');
        $("#speaker").text("-"+obj.author+' (Sort of)');
        currentQuote='"...'+misquote+'..." -'+ obj.author +' (Sort of)';
      },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader('X-Mashape-Authorization', 'cqHXUJnBr2msh0tlL06vUMpjyTI3p1Cuqpyjsn48IBVtfWMBoT'); // Enter here your Mashape key
      }
    });
  });
/*
      var item = Math.floor(Math.random()*47);
        $("#quote").text('"'+quotes.main[item].quote+'"');
        $("#speaker").text("-"+quotes.main[item].speaker+"(Sort of)");
        currentQuote='"'+quotes.main[item].quote+'" '+ quotes.main[item].speaker +'(Sort of)';



    */

  $("#link").click(function(){
      if (currentQuote!=""){
        $(this).attr("href", "http://twitter.com/home?status="+ currentQuote);
      }
      if (currentQuote == ""){
        $(this).attr("href", "http://twitter.com/home?status=Check out -No Context- a cool new quote generator!");
      }
  });
});
