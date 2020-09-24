import axios from 'axios' ;

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ffa529c31b75cc3b76c8dcf8c9f4301b' ;

export const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{ 
        params: {
            q:query,
            units: 'metric',
            appid: API_KEY,
        }
    });

    return data;
};