<?php

if (isset($_POST["ville"]) && !empty($_POST["ville"])) {

    $ville = $_POST ["ville"];
    $url = "api.openweathermap.org/data/2.5/weather?q=".$ville."&units=metric&APPID=846f84f23e914c30b89fb82c3b9f2eed";

    $ch=curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch,CURLOPT_HEADER, false);
    $output = curl_exec($ch);
    curl_close($ch);

}


//api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=846f84f23e914c30b89fb82c3b9f2eed
//    curl_setopt($ch, CURLOPT_POST, true);
//    curl_setopt($ch, CURLOPT_POSTFIELDS, $ville);
