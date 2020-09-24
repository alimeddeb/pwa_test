import axios from 'axios' ;


const URL='https://api.openweathermap/data/2.5/weather';
const API_KEY = 'ffa529c31b75cc3b76c8dcf8c9f4301b' ;
const fetchWeather = async(query) => {
    const {data} = await axios.get(URL,{ 
        params: {
            q:query,
            units: 'metrics',
            APPID: API_KEY,
        }
    });
    return data;
};