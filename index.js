function getData() {
    const city = search.value;
    const url = 'your weather api url' + city;
    const options = {
        method: 'GET',
        headers: {
            'API-Key': '',
            'API-Host': ''
        }
    };


    fetch(url, options).then(response => response.json()).then(res => {
        console.log(res);
        temp.innerHTML = res.temp;
        ws.innerHTML = res.wind_speed;
        hmdty.innerHTML = res.humidity;
    }).catch(err => console.error(err));

}