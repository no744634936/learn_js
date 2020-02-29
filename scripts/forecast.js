const key="PGI4g2cdM4lVImMFFjWdW3M3Qt4UBEGw";


//get city information。这个世界上有两个东京，我要选的是日本的东京
const getCity=async(city)=>{
    const base="https://dataservice.accuweather.com/locations/v1/cities/search";
    const query=`?apikey=${key}&q=${city}`;
    const response = await fetch(base + query, {mode:"cors"});
    const data=await response.json();
    // console.log(data[0]);
    return data[0];
}

//get weather information.
const getWeather=async(location_id)=>{
    const url=`http://dataservice.accuweather.com/currentconditions/v1/${location_id}?apikey=${key}`;
    const response= await fetch(url,{mode:"cors"});
    const data=await response.json();
    // console.log(data);
    return data;
}

// getCity("tokyo")
//     .then(data=>{console.log(data);})
//     .catch(err=>{console.log(err);})

// getWeather(226396);

// getCity("tokyo")
//     .then(data=>{
//         //注意Key 要大写。getWeather 返回一个promise 所以可以再加一个then.记得要return
//        return getWeather(data["Key"]);
//     })
//     .then(weather_data=>{
//         console.log(weather_data[0]["WeatherText"]);
//     })
//     .catch(err=>{
//         console.log(err);
//     })