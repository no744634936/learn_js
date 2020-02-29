const form=document.querySelector("form");
const card=document.querySelector(".card");
const details=document.querySelector(".details");
const time=document.querySelector("img.time")
const icon=document.querySelector(".icon img")

//因为呼叫的方法都是async方法，所以这个方法也是async
const updateCity=async(city)=>{
    const cityData= await getCity(city);    
    const weather=await getWeather(cityData["Key"]);   

    //缩写 
    // return {
    //     cityData,
    //     weather
    // };

    return {
        cityData:cityData,
        weather:weather
    };
};

const updateUi=(data)=>{
    // const cityData=data.cityData;
    // const weather=data.weather;
    const {cityData,weather}=data;
    
    details.innerHTML=`
    <h5 class="my-3">${cityData["EnglishName"]}</h5>
    <div class="my-3">${weather[0].WeatherText}</div>
    <div class="display-4 my-4">
      <span>${weather[0].Temperature.Metric.Value}</span>
      <span>&deg;C</span>
    </div>
    `;
    //remove d-none
    if(card.classList.contains("d-none")){
        card.classList.remove("d-none");
    }

    //update day/night and icon image
    let timeSrc=null;
    if(weather.IsDayTime){
        timeSrc="img/day.svg";
    }else{
        timeSrc="img/night.svg";
    }
    time.setAttribute("src",timeSrc);

    const iconSrc=`img/icons/${weather[0].WeatherIcon}.svg`;
    icon.setAttribute("src",iconSrc);
};

form.addEventListener("submit",e=>{
    //防止页面刷新；
    e.preventDefault();

    //get city value
    const city=form.city.value.trim();

    //clear input 
    form.reset();

    //change info
    updateCity(city)
        .then(data=>{
            console.log(data);
            updateUi(data);
        })
        .catch(err=>{console.log(err);
        })

});