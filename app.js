const searcBar = document.getElementById('searcbar');
const btn =document.querySelector('.btn');
const city =document.querySelector('.city')
const temparature =document.querySelector('.temparature')
const desc =document.querySelector('.desc')

btn.addEventListener('click',function(){
      const cityName =searcBar.value
      const key ='6460e908a3bf7f83bc699c9440789c1b'
      const url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
      console.log(url)

      fetch(url)
      .then(response => response.json())
      .then(data =>{
            console.log(data);
            city.innerHTML =`Şehir: ${data.name}`
            temparature.innerHTML=`Sıcaklık: ${Math.round(data.main.temp)}°C`
            desc.innerHTML =`${data.weather[0].description}`

      })
      .catch(err=>console.log(err))
      
})



















