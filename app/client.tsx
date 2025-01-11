"use client";

import styles from "./styles/page.module.css";
import styles_pr from "./styles/projects.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { projects } from "./data.tsx"
import Card from "./projectCard.module.tsx";
import LinkIcon from '@/app/static/link.svg';
import GithubIcon from '@/app/static/github.svg';
import DiscordIcon from '@/app/static/discord.svg';
import TelegramIcon from '@/app/static/telegram.svg';
import ClockUpIcon from '@/app/static/clock_up.svg';
import { IconBrandCloudflare, IconBrandCpp, IconBrandCss3, IconBrandDocker, IconBrandHtml5, IconBrandJavascript, IconBrandNextjs, IconBrandNodejs, IconBrandPrisma, IconBrandPython, IconBrandReact, IconBrandTypescript, IconCode, IconCoffee, IconDeviceDesktop, IconServer } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

interface Weather {
	status: string,
	message: string,
	temp: number,
	condition: string,
	icon: string
}

const getTime = (): string => {
	return new Date().toLocaleString('ru-RU', {
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		hour12: false,
		timeZone: 'Etc/GMT-3'
	});
}
export default function Home(props: { birthday: boolean, timeServer: string, christmas: boolean, year: string, age: number }) {
	const [time, set_time] = useState(props.timeServer);
	const [weather, setWeather] = useState<Weather>(null);

	useEffect(() => {
		window.onbeforeunload = function () {
			if (!window.location.hash) {
				window.scrollTo(0, 0);
			}
		}
		axios.get("https://wakatime.com/share/@AndcoolSystems/c20041f4-a965-47c3-ac36-7234e622a980.json").then(response => {
			const wakatime = response.data.data.grand_total.human_readable_total_including_other_language;
			function add_waka() {
				const waka = document.getElementById("waka") as HTMLAnchorElement;
				if (waka.innerHTML.length < wakatime.length)
					waka.innerHTML += wakatime[waka.innerHTML.length];
			}
			setInterval(add_waka, 45);
		});

		set_time(getTime());
		setInterval(() => {
			set_time(getTime());
		}, 1000);

		axios.get('https://weather.andcool.ru/api?place=andcool&json=true').then((response) => {
			if (response.status === 200) {
				setWeather(response.data as Weather);
			}
		});

		window.onscroll = () => {
			const alpha = Math.max(0, (document.documentElement.clientHeight / 2) - window.scrollY) / (document.documentElement.clientHeight / 2);
			const scroll_bottom = document.getElementById('scroll_bottom') as HTMLSpanElement;
			scroll_bottom.style.opacity = alpha.toString();
		}

		return () => {
			window.onscroll = null;
		}
	}, []);

	const projects_el = projects.map(project => <Card key={project.id} project={project} />);

	const scrollDown = () => {
		const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
		window.scrollTo({
			top: vh,
			behavior: 'smooth'
		});
	}

	return (
		<main style={{ position: "relative", inset: 0, overflow: 'hidden' }}>
			<a className={styles.buyMeACoffee}
				href="https://www.donationalerts.com/r/andcool_systems"
				target="_blank">
				<IconCoffee />
				<p>Buy me a coffee</p>
			</a>
			<header className={`${styles.header} ${(props.birthday || props.christmas) && styles.header_birthday}`}>
				<div className={styles.animated}>
					<div className={styles.nicks}>
						<div className={`${styles.card} card`}>
							<div className={styles.card_inner}>
								<div className={styles.card_front}>
									<img src="./static/andcool.jpg" alt="Front Image" />
								</div>
								{props.birthday && <img src="./static/party-hat.png" className={styles.party_hat} />}
								{props.christmas && <img src="./static/christmas-hat.png" className={styles.christmas_hat} />}
							</div>
						</div>
						<div className={styles.name_cont}>
							<h1 className={styles.name}>AndcoolSystems</h1>
							{weather ? <p style={{ margin: 0, color: 'gray', fontWeight: 500, height: '1.5rem' }}>
								{Math.round(weather?.temp)}°C, <img alt="" src={`https://weather.andcool.ru/static/icons/${weather.icon}.svg`} />{weather?.condition}
							</p> : <span style={{ height: '1.5rem' }}></span>
							}
						</div>
					</div>
					<div className={styles.hello}>
						<h2>Привет👋</h2>
						<p style={{ marginTop: "3px" }}>Меня зовут Андрей, мне <span title="7 Сентября 2007г.">{props.age} лет</span>. Я Full Stack TypeScript && Python разработчик.<br />
							Занимаюсь разработкой сайтов, а так же пишу Телеграм ботов на заказ <span style={{ color: 'grey', fontSize: '.9rem' }}>(и для себя тоже).</span></p>
						<p style={{ marginTop: "1%" }}>
							<b>Часов в Wakatime:</b> <a target="_blank" href="https://wakatime.com/@AndcoolSystems" style={{ color: "#eeeeee" }} id="waka"></a>
							<br />
							<b>Локальное время:</b> {time} <span style={{ color: 'grey', fontSize: '.9rem' }}>UTC+3</span>
						</p>
					</div>
					<div className={styles.social}>
						<a href="https://github.com/Andcool-Systems" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<GithubIcon />
								<span><b>GitHub</b></span>
								<LinkIcon />
							</div>
						</a>
						<a href="https://discord.com/users/812990469482610729/" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<DiscordIcon />
								<span><b>Discord</b></span>
								<LinkIcon />
							</div>
						</a>
						<a href="https://t.me/andcool_systems" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<TelegramIcon />
								<span><b>Telegram</b></span>
								<LinkIcon />
							</div>
						</a>

						<a href="https://status.andcool.ru" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<ClockUpIcon />
								<span><b>Status page</b></span>
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
					<img alt="" src="/static/arrow.svg" />Scroll down
				</span>
			</header>
			<h1>Основные <span className={styles.main_tech}>навыки</span></h1>
			<div className={styles.stack}>
				<h1 style={{
					fontSize: "150%",
					display: 'flex',
					alignItems: 'center',
					gap: '.3rem'
				}}>
					<IconDeviceDesktop style={{ filter: 'drop-shadow( 0px 0px 25px #149ECA)' }} />Frontend</h1>
				<div className={styles.tech}>
					<div>
						<IconBrandReact width={64} height={64} strokeWidth={1.5} />
						<span>ReactJs</span>
					</div>
					<div>
						<IconBrandNextjs width={64} height={64} strokeWidth={1.5} />
						<span>NextJs</span>
					</div>
					<div>
						<IconBrandTypescript width={64} height={64} strokeWidth={1.5} />
						<span>TypeScript</span>
					</div>
					<div>
						<IconBrandJavascript width={64} height={64} strokeWidth={1.5} />
						<span>JavaScript</span>
					</div>
					<div>
						<IconBrandHtml5 width={64} height={64} strokeWidth={1.5} />
						<span>HTML 5</span>
					</div>
					<div>
						<IconBrandCss3 width={64} height={64} strokeWidth={1.5} />
						<span>CSS 3</span>
					</div>
				</div>
				<h1 style={{
					fontSize: "150%",
					marginTop: "3rem",
					display: 'flex',
					alignItems: 'center',
					gap: '.3rem'
				}}>
					<IconServer style={{ filter: 'drop-shadow( 0px 0px 25px #ea2845)' }} />Backend</h1>
				<div className={styles.tech}>
					<div>
						<Image src="./static/nest.svg" alt="nest" width={64} height={64} />
						<span>NestJs</span>
					</div>
					<div>
						<IconBrandNodejs width={64} height={64} strokeWidth={1.5} />
						<span>NodeJs</span>
					</div>
					<div>
						<Image src="./static/express.svg" alt="express" width={64} height={64} />
						<span>Express.js</span>
					</div>
					<div>
						<IconBrandPrisma width={64} height={64} strokeWidth={1.5} />
						<span style={{ textWrap: "nowrap" }}>Prisma ORM</span>
					</div>
					<div>
						<Image src="./static/nginx.svg" alt="nginx" width={64} height={64} />
						<span>Nginx</span>
					</div>
					<div>
						<IconBrandPython width={64} height={64} strokeWidth={1.5} />
						<span>Python 3</span>
					</div>
					<div>
						<Image src="./static/fastapi.svg" alt="fastapi" width={64} height={64} />
						<span>FastAPI</span>
					</div>
				</div>
				<h1 style={{
					fontSize: "150%",
					marginTop: "3rem",
					display: 'flex',
					alignItems: 'center',
					gap: '.3rem'
				}}>
					<IconCode style={{ filter: 'drop-shadow( 0px 0px 25px #0B5000)' }} />Остальной стек</h1>
				<div className={styles.tech}>
					<div>
						<IconBrandCpp width={64} height={64} strokeWidth={1.5} />
						<span>C++</span>
					</div>
					<div>
						<Image src="./static/java.svg" alt="java" width={64} height={64} />
						<span>Java</span>
					</div>
					<div>
						<IconBrandDocker width={64} height={64} strokeWidth={1.5} />
						<span>Docker</span>
					</div>
					<div>
						<IconBrandCloudflare width={64} height={64} strokeWidth={1.5} />
						<span>CloudFlare</span>
					</div>
				</div>
			</div>
			<h1>Последние <span className={styles.projects_txt}>проекты</span></h1>
			<div className={styles_pr.main}>
				{projects_el}
				<Link href="https://github.com/Andcool-Systems?tab=repositories" target="_blank" style={{ textDecoration: "none" }}>
					<div className={styles_pr.button} style={{ borderWidth: '2px', justifyContent: 'center' }}>
						<LinkIcon />
						<p style={{ fontFamily: 'inherit' }}>Больше проектов</p>
					</div>
				</Link>
			</div>

			<footer>
				<p>AndcoolSystems, andcool, эндкул 2018–{props.year}</p>
			</footer>
		</main>
	);
}
