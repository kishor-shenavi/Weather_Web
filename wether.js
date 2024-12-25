const apiKey="ab18652b621ad5d041f2f961bf03f65b";
const apiURL="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const wethericon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiURL +city  +`&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();

        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"℃";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
        if(data.weather[0].main=="Clouds"){
            wethericon.src="images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            wethericon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            wethericon.src="images/rain.png";
        }
        
        else if(data.weather[0].main=="Drizzle"){
            wethericon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            wethericon.src="images/mist.png";
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    
    }

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})


