

$(document).ready(function(){
  var quotes= $.getJSON(quotes.json)
  var currentQuote="";
		$("#button").click(function(){
      var item = Math.floor(Math.random()*47);
        $("#quote").text("\""+quotes.main[item].quote+"\"");
        $("#speaker").text("-"+quotes.main[item].speaker+"(Sort of)");
        currentQuote="\""+quotes.main[item].quote+"\" -"+ quotes.main[item].speaker +"(Sort of)";
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