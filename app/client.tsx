'use client';

import styles from './styles/page.module.css';
import styles_pr from './styles/projects.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { projects } from './data.tsx';
import Card from './projectCard.module.tsx';
import LinkIcon from '@/app/static/link.svg';
import GithubIcon from '@/app/static/github.svg';
import DiscordIcon from '@/app/static/discord.svg';
import TelegramIcon from '@/app/static/telegram.svg';
import ClockUpIcon from '@/app/static/clock_up.svg';

import ExpressIcon from '@/app/static/express.svg';
import NginxIcon from '@/app/static/nginx.svg';
import FastApiIcon from '@/app/static/fastapi.svg';
import JavaIcon from '@/app/static/java.svg';
import NestIcon from '@/app/static/nest.svg';
import {
    IconBrandCloudflare,
    IconBrandCpp,
    IconBrandCss3,
    IconBrandDocker,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandPrisma,
    IconBrandPython,
    IconBrandReact,
    IconBrandTypescript,
    IconChevronDown,
    IconCloud,
    IconCloudRain,
    IconCloudStorm,
    IconCode,
    IconCoffee,
    IconDeviceDesktop,
    IconMist,
    IconServer,
    IconSnowflake,
    IconSun
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';

interface Weather {
    status: string;
    message: string;
    temp: number;
    condition: string;
    icon: string;
}

const getTime = (): string => {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-3'
    });
};

const techIconProps = {
    width: 64,
    height: 64,
    strokeWidth: 1.5
};

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

export default function Home(props: {
    birthday: boolean;
    timeServer: string;
    christmas: boolean;
    year: string;
    age: number;
}) {
    const [time, set_time] = useState(props.timeServer);
    const [weather, setWeather] = useState<Weather>(null);

    useEffect(() => {
        window.onbeforeunload = () => {
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }
        };

        axios
            .get(
                'https://wakatime.com/share/@AndcoolSystems/c20041f4-a965-47c3-ac36-7234e622a980.json'
            )
            .then(response => {
                const wakatime =
                    response.data.data.grand_total
                        .human_readable_total_including_other_language;
                const add_waka = () => {
                    const waka = document.getElementById(
                        'waka'
                    ) as HTMLAnchorElement;
                    if (waka.innerHTML.length < wakatime.length)
                        waka.innerHTML += wakatime[waka.innerHTML.length];
                };
                setInterval(add_waka, 45);
            });

        set_time(getTime());
        setInterval(() => {
            set_time(getTime());
        }, 1000);

        axios
            .get('https://weather.andcool.ru/api?place=andcool&json=true')
            .then(response => {
                if (response.status === 200) {
                    setWeather(response.data as Weather);
                }
            });

        window.onscroll = () => {
            const client_height = document.documentElement.clientHeight / 2;
            const alpha =
                Math.max(0, client_height - window.scrollY) / client_height;

            const scroll_bottom = document.getElementById(
                'scroll_bottom'
            ) as HTMLSpanElement;
            scroll_bottom.style.opacity = alpha.toString();
        };

        return () => {
            window.onscroll = null;
        };
    }, []);

    const projects_el = projects.map(project => (
        <Card key={project.id} project={project} />
    ));

    const scrollDown = () => {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    };

    return (
        <main style={{ position: 'relative', inset: 0, overflow: 'hidden' }}>
            <a
                className={styles.buyMeACoffee}
                href="https://www.donationalerts.com/r/andcool_systems"
                target="_blank"
            >
                <IconCoffee />
                <p>Buy me a coffee</p>
            </a>
            <header
                className={`${styles.header} ${
                    (props.birthday || props.christmas) &&
                    styles.header_birthday
                }`}
            >
                <div className={styles.animated}>
                    <div className={styles.nicks}>
                        <div className={`${styles.card} card`}>
                            <div className={styles.card_inner}>
                                <div className={styles.card_front}>
                                    <Image
                                        src="/static/andcool.jpg"
                                        alt="Front Image"
                                        width={460}
                                        height={460}
                                    />
                                </div>
                                {props.birthday && (
                                    <Image
                                        src="/static/party-hat.png"
                                        alt="party hat"
                                        className={styles.party_hat}
                                        width={512}
                                        height={512}
                                    />
                                )}
                                {props.christmas && (
                                    <Image
                                        src="./static/christmas-hat.png"
                                        alt="christmas"
                                        className={styles.christmas_hat}
                                        width={360}
                                        height={360}
                                    />
                                )}
                            </div>
                        </div>
                        <div className={styles.name_cont}>
                            <h1 className={styles.name}>AndcoolSystems</h1>
                            {weather ? (
                                <p
                                    style={{
                                        margin: 0,
                                        color: 'gray',
                                        fontWeight: 500,
                                        height: '1.5rem'
                                    }}
                                >
                                    {Math.round(weather.temp)}°C,
                                    {getWeatherIcon(weather.icon)}
                                    {weather.condition}
                                </p>
                            ) : (
                                <span style={{ height: '1.5rem' }}></span>
                            )}
                        </div>
                    </div>
                    <div className={styles.hello}>
                        <h2>Привет👋</h2>
                        <p style={{ marginTop: '3px' }}>
                            Меня зовут Андрей, мне{' '}
                            <span title="7 Сентября 2007г.">
                                {props.age} лет
                            </span>
                            . Я Full Stack TypeScript && Python разработчик.
                            <br />
                            Занимаюсь разработкой сайтов, а так же пишу Телеграм
                            ботов на заказ{' '}
                            <span style={{ color: 'grey', fontSize: '.9rem' }}>
                                (и для себя тоже).
                            </span>
                        </p>
                        <p style={{ marginTop: '1%' }}>
                            <b>Часов в Wakatime:</b>{' '}
                            <a
                                target="_blank"
                                href="https://wakatime.com/@AndcoolSystems"
                                style={{ color: '#eeeeee' }}
                                id="waka"
                            ></a>
                            <br />
                            <b>Локальное время:</b> {time}{' '}
                            <span style={{ color: 'grey', fontSize: '.9rem' }}>
                                UTC+3
                            </span>
                        </p>
                    </div>
                    <div className={styles.social}>
                        <a
                            href="https://github.com/Andcool-Systems"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <GithubIcon />
                                <span>
                                    <b>GitHub</b>
                                </span>
                                <LinkIcon />
                            </div>
                        </a>
                        <a
                            href="https://discord.com/users/812990469482610729/"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <DiscordIcon />
                                <span>
                                    <b>Discord</b>
                                </span>
                                <LinkIcon />
                            </div>
                        </a>
                        <a
                            href="https://t.me/andcool_systems"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <TelegramIcon />
                                <span>
                                    <b>Telegram</b>
                                </span>
                                <LinkIcon />
                            </div>
                        </a>

                        <a
                            href="https://status.andcool.ru"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <ClockUpIcon />
                                <span>
                                    <b>Status page</b>
                                </span>
                                <LinkIcon />
                            </div>
                        </a>
                    </div>
                </div>
                <span
                    className={styles.scroll_bottom}
                    id="scroll_bottom"
                    onClick={scrollDown}
                    style={{ cursor: 'pointer' }}
                >
                    <IconChevronDown />
                    Scroll down
                </span>
            </header>
            <h1>
                Основные <span className={styles.main_tech}>навыки</span>
            </h1>
            <div className={styles.stack}>
                <h1
                    style={{
                        fontSize: '150%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.3rem'
                    }}
                >
                    <IconDeviceDesktop
                        style={{ filter: 'drop-shadow( 0px 0px 25px #149ECA)' }}
                    />
                    Frontend
                </h1>
                <div className={styles.tech}>
                    <div>
                        <IconBrandReact {...techIconProps} />
                        <span>ReactJs</span>
                    </div>
                    <div>
                        <IconBrandNextjs {...techIconProps} />
                        <span>NextJs</span>
                    </div>
                    <div>
                        <IconBrandTypescript {...techIconProps} />
                        <span>TypeScript</span>
                    </div>
                    <div>
                        <IconBrandJavascript {...techIconProps} />
                        <span>JavaScript</span>
                    </div>
                    <div>
                        <IconBrandHtml5 {...techIconProps} />
                        <span>HTML 5</span>
                    </div>
                    <div>
                        <IconBrandCss3 {...techIconProps} />
                        <span>CSS 3</span>
                    </div>
                </div>
                <h1
                    style={{
                        fontSize: '150%',
                        marginTop: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.3rem'
                    }}
                >
                    <IconServer
                        style={{ filter: 'drop-shadow( 0px 0px 25px #ea2845)' }}
                    />
                    Backend
                </h1>
                <div className={styles.tech}>
                    <div>
                        <NestIcon {...techIconProps} />
                        <span>NestJs</span>
                    </div>
                    <div>
                        <IconBrandNodejs {...techIconProps} />
                        <span>NodeJs</span>
                    </div>
                    <div>
                        <ExpressIcon {...techIconProps} />
                        <span>Express.js</span>
                    </div>
                    <div>
                        <IconBrandPrisma {...techIconProps} />
                        <span style={{ textWrap: 'nowrap' }}>Prisma ORM</span>
                    </div>
                    <div>
                        <NginxIcon {...techIconProps} />
                        <span>Nginx</span>
                    </div>
                    <div>
                        <IconBrandPython {...techIconProps} />
                        <span>Python 3</span>
                    </div>
                    <div>
                        <FastApiIcon {...techIconProps} />
                        <span>FastAPI</span>
                    </div>
                </div>
                <h1
                    style={{
                        fontSize: '150%',
                        marginTop: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '.3rem'
                    }}
                >
                    <IconCode
                        style={{ filter: 'drop-shadow( 0px 0px 25px #0B5000)' }}
                    />
                    Остальной стек
                </h1>
                <div className={styles.tech}>
                    <div>
                        <IconBrandCpp {...techIconProps} />
                        <span>C++</span>
                    </div>
                    <div>
                        <JavaIcon {...techIconProps} />
                        <span>Java</span>
                    </div>
                    <div>
                        <IconBrandDocker {...techIconProps} />
                        <span>Docker</span>
                    </div>
                    <div>
                        <IconBrandCloudflare {...techIconProps} />
                        <span>CloudFlare</span>
                    </div>
                </div>
            </div>
            <h1>
                Последние <span className={styles.projects_txt}>проекты</span>
            </h1>
            <div className={styles_pr.main}>
                {projects_el}
                <Link
                    href="https://github.com/Andcool-Systems?tab=repositories"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                >
                    <div
                        className={styles_pr.button}
                        style={{ borderWidth: '2px', justifyContent: 'center' }}
                    >
                        <LinkIcon />
                        <p style={{ fontFamily: 'inherit' }}>Больше проектов</p>
                    </div>
                </Link>
            </div>

            <footer>
                <p>AndcóolSýstems, andcóol, эндку́л 2018–{props.year}</p>
            </footer>
        </main>
    );
}
