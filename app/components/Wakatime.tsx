'use client';

import { zedMono } from '@/app/fonts/zed/index.tsx';
import axios from 'axios';
import { useEffect, useRef } from 'react';

const WAKATIME_API =
    'https://wakatime.com/share/@AndcoolSystems/c20041f4-a965-47c3-ac36-7234e622a980.json';

const Wakatime = () => {
    const wakaRef = useRef<HTMLAnchorElement>(null);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        axios
            .get(WAKATIME_API)
            .then(response => {
                const wakatime_total =
                    response.data.data.grand_total
                        .human_readable_total_including_other_language;
                const add_waka = () => {
                    if (
                        wakaRef.current.innerHTML.length < wakatime_total.length
                    )
                        wakaRef.current.innerHTML +=
                            wakatime_total[wakaRef.current.innerHTML.length];
                    else {
                        clearInterval(intervalRef.current);
                    }
                };
                intervalRef.current = setInterval(add_waka, 45);
            })
            .catch(console.error);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);
    return (
        <>
            <b>Wakatime:</b>{' '}
            <a
                ref={wakaRef}
                target="_blank"
                href="https://wakatime.com/@AndcoolSystems"
                style={{ color: '#eeeeee' }}
                className={zedMono.className}
            />
        </>
    );
};

export default Wakatime;
