"use client";

import styles from "./styles/page.module.css";
import styles_pr from "./styles/projects.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { projects } from "./data.tsx"
import Card from "./projectCard.module.tsx";

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
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill="white" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
								<span><b>GitHub</b></span>
								<svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" fill="currentColor" viewBox="0 0 16 16">
									<path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
									<path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
								</svg>
							</div>
						</a>
						<a href="https://discord.com/users/812990469482610729/" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill="white" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
								</svg>
								<span><b>Discord</b></span>
								<svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" fill="currentColor" viewBox="0 0 16 16">
									<path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
									<path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
								</svg>
							</div>
						</a>
						<a href="https://t.me/andcool_systems" style={{ color: "#eeeeee", textDecoration: "none" }} target="_blank">
							<div className={styles.single}>
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path fill="white" d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
								</svg>
								<span><b>Telegram</b></span>
								<svg xmlns="http://www.w3.org/2000/svg" width="23px" height="23px" fill="currentColor" viewBox="0 0 16 16">
									<path d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
									<path d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
								</svg>
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
