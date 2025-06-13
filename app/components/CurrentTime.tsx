import { useEffect, useRef, useState } from 'react';
import { zedMono } from '../fonts/zed';

const getTime = (): string => {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-3'
    });
};

const CurrentTime = ({ initial }: { initial: string }) => {
    const [time, setTime] = useState<string>(initial);
    const intervalRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        setTime(getTime());
        intervalRef.current = setInterval(() => {
            setTime(getTime());
        }, 1000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    return (
        <>
            <b>Локальное время:</b>{' '}
            <span className={zedMono.className}>{time}</span>{' '}
            <span
                style={{ color: 'grey', fontSize: '.9rem' }}
                className={zedMono.className}
            >
                UTC+3
            </span>
        </>
    );
};

export default CurrentTime;
