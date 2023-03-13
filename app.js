const express= require("express");
const https= require("https");
const app= express();


app.get("/", function(req, res){
    const url= "https://api.openweathermap.org/data/2.5/weather?q=Nazira&units=metric&appid=01c5ff2eefa095ecda020a8457eaea5e#"
    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp 
            const weatherDescription = weatherData.weather[0].description
            res.write("<p>The weather is currently " + weatherDescription+ "</p>");
            res.write("<h1>The temp in Nazira is " + temp + " degree celcius.</h1>");
            res.send()
        })
    })
})


app.listen(3000, function(){
    console.log("Sever is running on port 3000.");
})