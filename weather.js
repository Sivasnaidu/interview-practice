async function weather(){
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;

    if (!cityName){
        alert("please enter city Name")
    }
    const apiKey = "abb64159647fd5555242e4435f5f4f80";
    const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid={API key}';
    
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const weatherInfo = document.getElementById('result');

 const temperature = Math.round(data.main.temp - 273.15);
 const city = data.city;
 const country = data.sys.country;

 result.innerHTML = `Weather is ${city} ${temperature}`;

    }
    catch (error){
        console.log(error, "error fetching data");
    }
}