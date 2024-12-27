import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Delhi",
            feelsLike: 13.97,
            humidity: 94,
            temp: 14.05,
            tempamax: 14.05,
            tempamin: 14.05,
            weather: "mist",
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}