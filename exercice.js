


var btn = document.getElementById("btn");
var t =document.getElementById("temp");
var tempMax =document.getElementById("temp_max");
var tempMin =document.getElementById("temp_min");
var pression =document.getElementById("pression");
var wind =document.getElementById("wind");
var hum =document.getElementById("humidity");
var long =document.getElementById("longitude");
var lat =document.getElementById("latitude");
var card =document.getElementById("card");
var date = document.getElementById("date");
var carte = document.getElementById("card")


function inputMeteo()
{   var input = document.getElementById("ville").value;

     var dateNow = new Date();
     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
     // var day = dateNow.getDate();
     // var month = dateNow.getMonth()+1;
     // var year= dateNow.getFullYear();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        if (this.readyState === 4 && this.status === 200)
        {

            var json = JSON.parse(this.responseText);
            console.log(this.responseText);

            date.innerHTML=dateNow.toLocaleDateString('fr-FR', options);
            t.innerHTML=Math.round(json.main.temp)+"°";
            tempMax.innerHTML="Temp.max : "+Math.round(+json.main.temp_max)+"°";
            tempMin.innerHTML="Temp.min : "+Math.round(json.main.temp_min)+"°";
            pression.innerHTML="Pres.athmospérique : "+json.main.pressure+" hPa";
            wind.innerHTML="Vistesse du vent : "+json.wind.speed+" m/s";
            hum.innerHTML="Humidité : "+json.main.humidity+"%";
            long.innerHTML="Longitude : "+json.coord.lon;
            lat.innerHTML="Latitude : "+json.coord.lat;
            card.innerHTML="Carte : ";

        }
    };

    xhttp.open ("GET", "script.php?ville="+input, true);

    xhttp.send();
}

btn.addEventListener("click", inputMeteo);


// {
// "coord":{"lon":-0.13,"lat":51.51},
// "weather":[{"id":300,"main":"Drizzle","description":"light intensity drizzle","icon":"09d"}],
// "base":"stations",
// "main":{"temp":280.32,"pressure":1012,"humidity":81,"temp_min":279.15,"temp_max":281.15},
// "visibility":10000,
// "wind":{"speed":4.1,"deg":80},
// "clouds":{"all":90},
// "dt":1485789600,
// "sys":{"type":1,"id":5091,"message":0.0103,
// "country":"GB","sunrise":1485762037,
// "sunset":1485794875},
// "id":2643743,
// "name":"London","cod":200
// }

