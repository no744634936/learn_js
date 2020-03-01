class Forecast{
    constructor(){
        this.key="PGI4g2cdM4lVImMFFjWdW3M3Qt4UBEGw";
        this.cityURL="https://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherURL="http://dataservice.accuweather.com/currentconditions/v1/";
    }
     getCity=async(city)=>{
        const query=`?apikey=${this.key}&q=${city}`;
        const response = await fetch(this.cityURL + query, {mode:"cors"});
        const data=await response.json();
        // console.log(data[0]);
        return data[0];
    }
    getWeather=async(location_id)=>{
        const query=`${location_id}?apikey=${this.key}`;
        const response= await fetch(this.weatherURL+query,{mode:"cors"});
        const data=await response.json();
        // console.log(data);
        return data;
    }
    //不应该叫updateCity 应该叫sendInfo
    updateCity=async(city)=>{
        const cityData= await this.getCity(city);    
        const weather=await this.getWeather(cityData["Key"]);   
        return {
            cityData:cityData,
            weather:weather
        };
    };
}
