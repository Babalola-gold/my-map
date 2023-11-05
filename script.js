const fetchInfo = () => {
    let newDate = new Date()
    let month = newDate.getMonth() + 1
    let day = newDate.getDate()
    let year = newDate.getFullYear()
    let date = `${month}/${day}/${year}`
    let time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
    let cityname = document.getElementById("userInfo").value
    let apiKey = "5422c03d4efff3846f70f59bc27074d0"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((result)=>{
        console.log(result);
        disp.innerHTML = `
        <p style="font-size: 70px; color: blue; ">${result.main.temp}<span>&#8451</span></p>
        <p style="font-size: 50px; color: white;">${result.name}</p>
        <p style="font-size: 30px; color: white;">${result.weather[0].description}</p>
        <p>${result.weather[0].icon}</p>`
        pre.innerHTML = `
        <p>${result.sys.country}</p>
        <p>${result.main.pressure}</p>
        <p>${result.main.humidity}</p>
        <p>${result.wind.speed} K/H </p>
        <p>${result.clouds.all}</p
        <p>${date}</p>
        <p>${time}</p>`
    })

    .catch((err) => {console.log(err)})
    
}