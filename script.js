var settings = {
    "url": "https://api.eventful.com/json/events/search?&app_key=3PCFhKqWmgV9xscv&keywords=shows&location=houston&date=Today",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log(response.events.event[0].title);
    console.log(response.events.event[0].city_name);
    console.log(response.events.event[0].region_name);
    console.log(response.events.event[0].country_name);
    console.log(response.events.event[0].start_time);
    
  });
