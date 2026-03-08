'use client';

import styles from './styles/page.module.css';
import styles_pr from '@/app/styles/projects.module.css';
import { useEffect } from 'react';
import { projects } from './data.tsx';
import Card from './components/projectCard.module.tsx';

import ExpressIcon from '@/app/static/express.svg';
import NginxIcon from '@/app/static/nginx.svg';
import JavaIcon from '@/app/static/java.svg';
import NestIcon from '@/app/static/nest.svg';
import {
    IconBrandCloudflare,
    IconBrandCpp,
    IconBrandCss3,
    IconBrandDocker,
    IconBrandGithub,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandNodejs,
    IconBrandPrisma,
    IconBrandPython,
    IconBrandReact,
    IconBrandRust,
    IconBrandTelegram,
    IconBrandTypescript,
    IconChevronDown,
    IconCode,
    IconDeviceDesktop,
    IconExternalLink,
    IconServer
} from '@tabler/icons-react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticTooltip } from './components/Tooltip.tsx';
import BuyMeCoffee from './components/BuyMeCoffee.tsx';
import Wakatime from './components/Wakatime.tsx';
import CurrentTime from './components/CurrentTime.tsx';
import Weather from './components/Weather.tsx';
import { Bubble } from './components/Bubble.tsx';

const techIconProps = {
    width: 64,
    height: 64,
    strokeWidth: 1.5
};

export default function Home(props: {
    birthday: boolean;
    timeServer: string;
    christmas: boolean;
    year: string;
    age: number;
}) {
    useEffect(() => {
        window.onbeforeunload = () => {
            if (!window.location.hash) {
                window.scrollTo(0, 0);
            }
        };

        window.onscroll = () => {
            const client_height = document.documentElement.clientHeight / 2;
            const alpha =
                Math.max(0, client_height - window.scrollY) / client_height;

            const scroll_bottom = document.getElementById('scroll_bottom');
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
            <BuyMeCoffee />
            {/*<Activity />*/}
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
                                <div className={styles.avatar_bubble}>
                                    <Image
                                        src="/static/andcool.png"
                                        alt="Avatar"
                                        width={460}
                                        height={460}
                                    />
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
                                            src="/static/christmas-hat.png"
                                            alt="christmas"
                                            className={styles.christmas_hat}
                                            width={360}
                                            height={360}
                                        />
                                    )}
                                    <Bubble
                                        colors={[
                                            '#ff0000',
                                            '#00ff00',
                                            '#0000ff'
                                        ]}
                                        styles={{
                                            width: 'calc(100% + 35px)',
                                            position: 'absolute'
                                        }}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.name_cont}>
                            <h1 className={styles.name}>AndcoolSystems</h1>
                            <Weather />
                        </div>
                    </div>
                    <div className={styles.hello}>
                        <h2>Привет👋</h2>
                        <p style={{ marginTop: '3px' }}>
                            Я <b>Эндкул</b> – Фуллстак TypeScript и Rust
                            разработчик. В свободное время занимаюсь разработкой
                            сайтов, иногда пишу Телеграм или Дискорд ботов,
                            сервера и утилиты.
                            <br />
                            <br />В реальности меня зовут <b>Андрей</b>, мне{' '}
                            <StaticTooltip title="7 Сентября 2007г.">
                                <span style={{ cursor: 'pointer' }}>
                                    {props.age} лет
                                </span>
                            </StaticTooltip>
                            .
                        </p>
                        <p style={{ marginTop: '1%' }}>
                            <Wakatime />
                            <br />
                            <CurrentTime initial={props.timeServer} />
                        </p>
                    </div>
                    <div className={styles.social}>
                        <a
                            href="https://github.com/Andcool-Systems"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <IconBrandGithub />
                                <span>
                                    <b>GitHub</b>
                                </span>
                            </div>
                        </a>
                        <a
                            href="/tg"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <IconBrandTelegram />
                                <span>
                                    <b>Telegram</b>
                                </span>
                            </div>
                        </a>

                        <a
                            href="/tgc"
                            style={{ color: '#eeeeee', textDecoration: 'none' }}
                            target="_blank"
                        >
                            <div className={styles.single}>
                                <IconBrandTelegram />
                                <span>
                                    <b>Channel</b>
                                </span>
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
                    <div className={styles.stack_shadow_cont}>
                        <div
                            className={styles.stack_shadow}
                            style={{ backgroundColor: '#149ECA' }}
                        />
                        <IconDeviceDesktop />
                    </div>
                    Frontend
                </h1>
                <div className={styles.tech}>
                    <div>
                        <IconBrandNextjs {...techIconProps} />
                        <span>NextJs</span>
                    </div>
                    <div>
                        <IconBrandReact {...techIconProps} />
                        <span>ReactJs</span>
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
                    <div className={styles.stack_shadow_cont}>
                        <div
                            className={styles.stack_shadow}
                            style={{ backgroundColor: '#ea2845' }}
                        />
                        <IconServer />
                    </div>
                    Backend
                </h1>
                <div className={styles.tech}>
                    <div>
                        <NestIcon {...techIconProps} />
                        <span>NestJs</span>
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
                        <IconBrandRust {...techIconProps} />
                        <span>Rust</span>
                    </div>
                    <div>
                        <IconBrandDocker {...techIconProps} />
                        <span>Docker</span>
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
                    <div className={styles.stack_shadow_cont}>
                        <div
                            className={styles.stack_shadow}
                            style={{ backgroundColor: '#0B5000' }}
                        />
                        <IconCode />
                    </div>
                    Остальной стек
                </h1>
                <div className={styles.tech}>
                    <div>
                        <IconBrandNodejs {...techIconProps} />
                        <span>NodeJs</span>
                    </div>
                    <div>
                        <IconBrandPython {...techIconProps} />
                        <span>Python</span>
                    </div>
                    <div>
                        <IconBrandCpp {...techIconProps} />
                        <span>C++</span>
                    </div>
                    <div>
                        <JavaIcon {...techIconProps} />
                        <span>Java</span>
                    </div>
                    <div>
                        <StaticTooltip title="Помянем">
                            <IconBrandCloudflare {...techIconProps} />
                        </StaticTooltip>
                        <span>CloudFlare</span>
                    </div>
                </div>
            </div>
            <h1>
                <span className={styles.projects_txt}>Лучшие</span> проекты
            </h1>
            <div className={styles_pr.main}>
                {projects_el}
                <Link
                    href="https://github.com/Andcool-Systems?tab=repositories"
                    target="_blank"
                    style={{ textDecoration: 'none' }}
                >
                    <div
                        className={`${styles_pr.button} ${styles.single}`}
                        style={{ borderWidth: '2px', justifyContent: 'center' }}
                    >
                        <p style={{ fontFamily: 'inherit' }}>Больше проектов</p>
                        <IconExternalLink />
                    </div>
                </Link>
            </div>

            <footer>
                <p>AndcóolSýstems, andcóol, эндку́л 2018–{props.year}</p>
            </footer>
        </main>
    );
}
