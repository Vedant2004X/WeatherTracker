const key = "88d935411bf0e876c66e7db16580623c";
const url ="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const humidity_data = document.querySelector(".humidity-data");


async function cweather(city)
{
    const response = await fetch(url + city + `&appid=${key}`);
    var data = await response.json();
        console.log(data);

    if(response.status  == 404)
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".btn").style.display = "none";
        alert("Please enter correct city name");
    }
    else{
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
   document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
   document.querySelector(".humidity-data").innerHTML = data.weather.main;
   document.querySelector(".wind").innerHTML = Math.ceil(data.wind.speed) + "KM/HR";
   var k = 273.15 + data.main.temp;
   var f = ((9/5)*data.main.temp)+32;
 /*  document.querySelector(".city1").innerHTML= data.name;*/
   document.querySelector(".tempk").innerHTML =Math.round(k) + "°K";
   document.querySelector(".tempf").innerHTML =Math.round(f)+ "°F";
   document.querySelector(".pressure").innerHTML = data.main.pressure+" Bar";
   document.querySelector(".feels").innerHTML = data.main.feels_like;

    // Unix timestamp
const timestamp = data.sys.sunrise ;

// Convert to milliseconds (required by JavaScript Date)
const milliseconds = timestamp * 1000;

// Create a new Date object
const dateObject = new Date(milliseconds);

// Get various components of the date
const year = dateObject.getFullYear();
const month = dateObject.getMonth() + 1; // Months are zero-based, so add 1
const day = dateObject.getDate();
let hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
const meridiem = hours >= 12 ? 'PM' : 'AM';

// Convert hours to 12-hour format
hours = hours % 12 || 12;

// Display the result
document.querySelector(".sunrise2").innerHTML = hours + " A.M";


   // Unix timestamp
   const timestamp1 = data.sys.sunset ;

   // Convert to milliseconds (required by JavaScript Date)
   const milliseconds1 = timestamp * 1000;
   
   // Create a new Date object
   const dateObject1 = new Date(milliseconds);
   
   // Get various components of the date
   const year1 = dateObject.getFullYear();
   const month1 = dateObject.getMonth() + 1; // Months are zero-based, so add 1
   const day1 = dateObject.getDate();
   let hours1 = dateObject.getHours();
   const minutes1 = dateObject.getMinutes();
   const seconds1 = dateObject.getSeconds();
   const meridiem1 = hours1 >= 12 ? 'PM' : 'AM';
   
   // Convert hours to 12-hour format
   hours1 = hours1 % 12 || 12;
   
   // Display the result
   document.querySelector(".sunset").innerHTML = hours1 + " P.M";
   

    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "images/clouds.png";
        document.querySelector(".humidity-data").innerHTML= "(Clouds)";
    } 
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "images/clear.png";
        document.querySelector(".humidity-data").innerHTML= "(Clear)";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "images/drizzle.png";
        document.querySelector(".humidity-data").innerHTML= "(Drizzle)";
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "images/mist.png";
        document.querySelector(".humidity-data").innerHTML= "(Mist)";
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "images/rain.png";
        document.querySelector(".humidity-data").innerHTML= "(Rain)";
    }
    else if(data.weather[0].main == "Snow")
    {
        weatherIcon.src = "images/snow.png";
        document.querySelector(".humidity-data").innerHTML= "(Snow)";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    document.querySelector(".btn").style.display = "block";
    }

}
searchbtn.addEventListener("click" , ()=>{
    cweather(searchbox.value);
})

function fn()
{
    document.querySelector(".btn").style.color= "transparent";
   // alert("Click successfully");
    document.querySelector(".weather1").style.display = "block";
    document.querySelector(".card").style.height = "950px";
    document.querySelector(".btn").style.display = "none";
    document.querySelector(".button1").style.display = "block";
}
function fn1()
{
    document.querySelector(".weather1").style.display = "none";
    document.querySelector(".card").style.height = "auto";
    document.querySelector(".button1").style.display = "none";
    document.querySelector(".btn").innerHTML= "More Info Click Here";
}
/*
document.addEventListener("DOMContentLoaded", function() {
    // Get the button and content elements
    var toggleButton = document.getElementsByClassName("weather1")[0];
    var content = document.getElementsByClassName("details")[1];
  
    // Add click event listener to the button
    toggleButton.addEventListener("click", function() {
      // Toggle the "hidden" class on the content element
      content.classList.toggle("hidden");
    });
  });*/