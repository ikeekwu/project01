var settings = {
    "url": "https://api.eventful.com/rest/events/search?keywords=shows&location=San+Diego&date=Today&app_key=3PCFhKqWmgV9xscv&",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.total_items);
    
  });


