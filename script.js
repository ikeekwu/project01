
$(document).ready(function() {
   
 
    function displayList () {
        $("#dropdown-lists").on("click", function() {
            $("#dropdown").show();
        });   
    };

    function selectCategory () {
        $("#entertainment").on("click", function() {
            $("#dropdown").hide();
            $(".card-body").show();
            $("#next-btn").show();
            $("#previous-btn").show();
        
            var settings = {
                url: "https://api.eventful.com/json/events/search?&app_key=3PCFhKqWmgV9xscv&keywords=entertainment&location=houston&date=This Week&sort_order=date&sort_direction=ascending",
                method: "GET",
                timeout: 0,
            };

            $.ajax(settings).done(function (response) {
            console.log(response);
                
                //Creating variables to store data
                var imgURL = "https://placehold.it/100x100";
                var title = response.events.event[0].title;
                var city = response.events.event[0].city_name;
                var state = response.events.event[0].region_name;
                var date = response.events.event[0].start_time;
                var venueName= response.events.event[0].venue_name;
                var venueAddress = response.events.event[0].venue_address;
                var image = $("<img>").attr("src", imgURL);
                var pDate = $("<p>").text("When: " + date); 
                var pVenue = $("<p>").text("Where:  " +  venueName); 
                var pLocation = $("<p>").text("Location: " + (city + "," + state));
                var pDirection = $("<p>").text("Location:  " +  venueAddress + "," + city + "," + state); 
                $("#header").append(title);
                $("#date").append(pDate);
                $("#directions").append(pVenue);
                $("#siteURL").append(pDirection);
                $("#bio-image").append(image);
            
                //SecondDiv
                var imgURLTwo= "https://placehold.it/100x100";
                var titleTwo = response.events.event[1].title;
                var cityTwo = response.events.event[1].city_name;
                var stateTwo = response.events.event[1].region_name;
                var dateTwo = response.events.event[1].start_time;
                var venueNameTwo= response.events.event[1].venue_name;
                var venueAddressTwo = response.events.event[1].venue_address;
                var imageTwo = $("<img>").attr("src", imgURLTwo);
                var pDateTwo = $("<p>").text("When: " + dateTwo); 
                var pVenueTwo = $("<p>").text("Where:  " +  venueNameTwo); 
                var pLocationTwo = $("<p>").text("Location: " + (cityTwo + "," + stateTwo));
                var pDirectionTwo = $("<p>").text("Location:  " +  venueAddressTwo + "," + cityTwo + "," + stateTwo); 
                $("#header-2").append(titleTwo);
                $("#date-2").append(pDateTwo);
                $("#directions-2").append(pVenueTwo);
                $("#siteURL-2").append(pDirectionTwo);
                $("#bio-image-2").append(imageTwo);
            
                //ThirdDiv
                var imgURLThree= "https://placehold.it/100x100";
                var titleThree = response.events.event[2].title;
                var cityThree = response.events.event[2].city_name;
                var stateThree = response.events.event[2].region_name;
                var dateThree = response.events.event[2].start_time;
                var venueNameThree= response.events.event[2].venue_name;
                var venueAddressThree = response.events.event[2].venue_address;
                var imageThree = $("<img>").attr("src", imgURLThree);
                var pDateThree = $("<p>").text("When: " + dateThree); 
                var pVenueThree = $("<p>").text("Where:  " +  venueNameThree); 
                var pLocationThree = $("<p>").text("Location: " + (cityThree + "," + stateThree));
                var pDirectionThree = $("<p>").text("Location:  " +  venueAddressThree + "," + cityThree + "," + stateThree); 
                $("#header-3").append(titleThree);
                $("#date-3").append(pDateThree);
                $("#directions-3").append(pVenueThree);
                $("#siteURL-3").append(pDirectionThree);
                $("#bio-image-3").append(imageThree);
            
                //FourthDiv
                var imgURLFour= "https://placehold.it/100x100";
                var titleFour = response.events.event[3].title;
                var cityFour = response.events.event[3].city_name;
                var stateFour = response.events.event[3].region_name;
                var dateFour = response.events.event[3].start_time;
                var venueNameFour= response.events.event[3].venue_name;
                var venueAddressFour = response.events.event[3].venue_address;
                var imageFour = $("<img>").attr("src", imgURLFour);
                var pDateFour = $("<p>").text("When: " + dateFour); 
                var pVenueFour = $("<p>").text("Where:  " +  venueNameFour); 
                var pLocationFour = $("<p>").text("Location: " + (cityFour + "," + stateFour));
                var pDirectionFour = $("<p>").text("Location:  " +  venueAddressFour + "," + cityFour + "," + stateFour); 
                $("#header-4").append(titleFour);
                $("#date-4").append(pDateFour);
                $("#directions-4").append(pVenueFour);
                $("#siteURL-4").append(pDirectionFour);
                $("#bio-image-4").append(imageFour);
            
                //FifthDiv 
                var imgURLFive= "https://placehold.it/100x100";
                var titleFive = response.events.event[4].title;
                var cityFive = response.events.event[4].city_name;
                var stateFive = response.events.event[4].region_name;
                var dateFive = response.events.event[4].start_time;
                var venueNameFive= response.events.event[4].venue_name;
                var venueAddressFive = response.events.event[4].venue_address;
                var imageFive = $("<img>").attr("src", imgURLFive);
                var pDateFive = $("<p>").text("When: " + dateFive); 
                var pVenueFive = $("<p>").text("Where:  " +  venueNameFive); 
                var pLocationFive = $("<p>").text("Location: " + (cityFive + "," + stateFive));
                var pDirectionFive = $("<p>").text("Location:  " +  venueAddressFive + "," + cityFive + "," + stateFive); 
                $("#header-5").append(titleFive);
                $("#date-5").append(pDateFive);
                $("#directions-5").append(pVenueFive);
                $("#siteURL-5").append(pDirectionFive);
                $("#bio-image-5").append(imageFive);
            
            // consolelog response for event startime for the week 
            console.log(response.events.event[0].start_time);
            console.log(response.events.event[1].start_time);
            console.log(response.events.event[2].start_time);
            console.log(response.events.event[3].start_time);
            console.log(response.events.event[4].start_time);
            
            // consolelog response for event title for the week 
            console.log(response.events.event[0].title);
            console.log(response.events.event[1].title);
            console.log(response.events.event[2].title);
            console.log(response.events.event[3].title);
            console.log(response.events.event[4].title);
            
            });
            $("#entertainment").empty();
            displayList();
        })
    }

    displayList();
    selectCategory();

});
        
        












