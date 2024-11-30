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

const fullYearsDifference = (date1: Date, date2: Date) => {
	const year1 = date1.getFullYear();
	const year2 = date2.getFullYear();
	let diff = year2 - year1;

	if (
		date2.getMonth() < date1.getMonth() ||
		(date2.getMonth() === date1.getMonth() && date2.getDate() < date1.getDate())
	) {
		diff--;
	}

	return diff;
}

export default function Home({ birthday, timeServer }: { birthday: boolean, timeServer: string }) {
	const [time, set_time] = useState(timeServer);
	const [weather, setWeather] = useState<Weather>(null);
	const age = fullYearsDifference(new Date('2007-09-07'), new Date());

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

	return (
		<main style={{ position: "relative", top: 0, right: 0, left: 0, bottom: 0 }}>
			<header className={`${styles.header} ${birthday && styles.header_birthday}`}>
				<div className={styles.animated}>
					<div className={styles.nicks}>
						<div className={`${styles.card} card`}>
							<div className={styles.card_inner}>
								<div className={styles.card_front}>
									<img src="./static/andcool.jpg" alt="Front Image" />
								</div>
								{birthday && <img src="./static/party-hat.png" className={styles.party_hat} />}
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
						<p style={{ marginTop: "3px" }}>Меня зовут Андрей, мне <span title="7 Сентября 2007г.">{age} лет</span>. Я Full Stack TypeScript && Python разработчик.<br />
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
					</div>
				</div>
				<span className={styles.scroll_bottom} id="scroll_bottom"><img alt="" src="/static/arrow.svg" />Scroll bottom</span>
			</header>
			<h1>Основные <span className={styles.main_tech}>навыки</span></h1>
			<div className={styles.stack}>
				<h1 style={{ fontSize: "150%" }}>Frontend</h1>
				<div className={styles.tech}>
					<div>
						<img src="./static/react.svg" alt="react"></img>
						<span>ReactJs</span>
					</div>
					<div>
						<img src="./static/nextjs.svg" alt="nextjs"></img>
						<span>NextJs</span>
					</div>
					<div>
						<img src="./static/ts.svg" alt="ts"></img>
						<span>TypeScript</span>
					</div>
					<div>
						<img src="./static/js.svg" alt="js"></img>
						<span>JavaScript</span>
					</div>
					<div>
						<img src="./static/html.svg" alt="html"></img>
						<span>HTML 5</span>
					</div>
					<div>
						<img src="./static/css.svg" alt="css"></img>
						<span>CSS 3</span>
					</div>
				</div>
				<h1 style={{ fontSize: "150%", marginTop: "3rem" }}>Backend</h1>
				<div className={styles.tech}>
					<div>
						<img src="./static/nest.svg" alt="nest"></img>
						<span>NestJs</span>
					</div>
					<div>
						<img src="./static/node.svg" alt="node"></img>
						<span>NodeJs</span>
					</div>
					<div>
						<img src="./static/express.svg" alt="express"></img>
						<span>Express.js</span>
					</div>
					<div>
						<img src="./static/prisma.svg" alt="prisma"></img>
						<span style={{ textWrap: "nowrap" }}>Prisma ORM</span>
					</div>
					<div>
						<img src="./static/nginx.svg" alt="nginx"></img>
						<span>Nginx</span>
					</div>
					<div>
						<img src="./static/py.svg" alt="python"></img>
						<span>Python 3</span>
					</div>
					<div>
						<img src="./static/fastapi.svg" alt="fastapi"></img>
						<span>FastAPI</span>
					</div>
				</div>
				<h1 style={{ fontSize: "150%", marginTop: "3rem" }}>Остальной стек</h1>
				<div className={styles.tech}>
					<div>
						<img src="./static/py.svg" alt="python"></img>
						<span>Python 3</span>
					</div>
					<div>
						<img src="./static/cpp.svg" alt="cpp"></img>
						<span>C++</span>
					</div>
					<div>
						<img src="./static/java.svg" alt="java"></img>
						<span>Java</span>
					</div>
					<div>
						<img src="./static/processing.svg" alt="processing"></img>
						<span>Processing</span>
					</div>
					<div>
						<img src="./static/arduino.svg" alt="arduino"></img>
						<span>Arduino</span>
					</div>
					<div>
						<img src="./static/rpi.svg" alt="rpi"></img>
						<span style={{ textAlign: "center" }}>Raspberry pi</span>
					</div>
					<div>
						<img src="./static/docker.svg" alt="docker"></img>
						<span>Docker</span>
					</div>
				</div>
			</div>
			<h1>Последние <span className={styles.projects_txt}>проекты</span></h1>
			<div className={styles_pr.main}>
				{projects_el}
			</div>

			<footer>
				<p>AndcoolSystems 2018–{new Date().getFullYear()}</p>
			</footer>
		</main>
	);
}
