import { IconBrandVscode } from '@tabler/icons-react';
import style from '@/app/styles/activity.module.css';
import { Fira_Code } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

const fira = Fira_Code({
    subsets: ['latin'],
    weight: ['400', '500', '600']
});

type ActivityType = {
    id: number;
    workplace?: string;
    file?: string;
    editor: string;
    editor_code: string;
    debugging: boolean;
    start_time: string;
};

const Activity = () => {
    const [activity, setActivity] = useState<ActivityType>(null);
    const [elapsedTime, setElapsedTime] = useState<string>('');
    const intervalRef = useRef<NodeJS.Timeout>(null);

    useEffect(() => {
        axios
            .get('https://activity.andcool.ru/ld0jjb')
            .then(response => {
                const act_list: ActivityType[] = response.data.activities;
                if (act_list.length) {
                    setActivity(act_list[0]);
                    intervalRef.current = setInterval(() => {
                        setElapsedTime(timeElapsed(act_list[0]?.start_time));
                    }, 1000);
                }
            })
            .catch(console.error);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    const timeElapsed = (isoDate: string): string => {
        const past = new Date(isoDate);
        const now = new Date();
        let diff = Math.floor((now.getTime() - past.getTime()) / 1000);

        const hours = Math.floor(diff / 3600);
        diff %= 3600;
        const minutes = Math.floor(diff / 60);
        const seconds = diff % 60;

        const pad = (n: number) => n.toString().padStart(2, '0');

        return hours > 0
            ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
            : `${pad(minutes)}:${pad(seconds)}`;
    };

    return (
        <div className={`${style.main} ${!activity && style.hidden}`}>
            <div className={style.icon_small}>
                <IconBrandVscode />
            </div>
            <div className={style.body}>
                <IconBrandVscode width={64} height={64} />
                <div className={style.texts}>
                    <p className={style.title} style={fira.style}>
                        <b>{activity?.workplace}</b>
                        <span>/{activity?.file}</span>
                    </p>
                    <p className={style.elapsed}>{elapsedTime} Elapsed</p>
                </div>
            </div>
        </div>
    );
};

export default Activity;
