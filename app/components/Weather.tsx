import {
    IconCloud,
    IconCloudRain,
    IconCloudStorm,
    IconMist,
    IconSnowflake,
    IconSun
} from '@tabler/icons-react';
import { zedMono } from '../fonts/zed';
import { useEffect, useState } from 'react';
import axios from 'axios';

const getWeatherIcon = (id: string) => {
    switch (id) {
        case '02':
        case '03':
        case '04':
            return <IconCloud />;
        case '09':
        case '10':
            return <IconCloudRain />;
        case '11':
            return <IconCloudStorm />;
        case '13':
            return <IconSnowflake />;
        case '50':
            return <IconMist />;
        default:
            return <IconSun />;
    }
};

type WeatherType = {
    status: string;
    message: string;
    temp: number;
    condition: string;
    icon: string;
};

const Weather = () => {
    const [weather, setWeather] = useState<WeatherType | null>(null);

    useEffect(() => {
        axios
            .get('/api/weather')
            .then(response => {
                if (response.status === 200) {
                    setWeather(response.data as WeatherType);
                }
            })
            .catch(console.error);
    }, []);

    if (!weather) return <span style={{ height: '1.5rem' }} />;
    return (
        <p
            style={{
                margin: 0,
                color: 'gray',
                fontWeight: 500,
                height: '1.5rem'
            }}
            className={zedMono.className}
        >
            {Math.round(weather.temp)}°C,
            {getWeatherIcon(weather.icon)}
            {weather.condition}
        </p>
    );
};

export default Weather;
