'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';
import Styles from '@/app/styles/wallpaper/style.module.css';
import { Suspense } from 'react';

const WallpaperComponent = () => {
    const [time, setTime] = useState<string>('');
    const searchParams = useSearchParams();
    const tz = 'Etc/' + (searchParams.get('tz') || 'GMT-3');

    const getTime = () => {
        return new Date().toLocaleString('ru-RU', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
            timeZone: tz
        });
    }

    useEffect(() => {
        setTime(getTime());
        setInterval(() => {
			setTime(getTime());
		}, 5000);
        
    }, [])
    return (
            <main className={Styles.main}>
                <div className={Styles.container}>
                    <img src={`/static/numbers/${time.charAt(0)}.gif`} />
                    <img src={`/static/numbers/${time.charAt(1)}.gif`} />
                    <p>:</p>
                    <img src={`/static/numbers/${time.charAt(3)}.gif`} />
                    <img src={`/static/numbers/${time.charAt(4)}.gif`} />
                </div>
            </main>
    );
};

const Main = () => {
    return (
        <Suspense>
            <WallpaperComponent />
        </Suspense>
    );
}

export default Main;