import { title } from "process"

export const fu = <>Самый простой способ обмениваться файлами со своими друзьями. Проект позволяет обмениваться Вашими файлами через ссылки, а получателю не обязательно иметь аккаунт на сайте.</>

export const fu_more = <><br /><br />Сайт и API хостятся на моей OrangePi 3 LTS.<br />
    Бекенд проекта написан на Python и FastAPI, а в качестве базы данных используется Prisma ORM. Фронтенд является статическими страницами и написан на стандартных HTML, CSS, JS.<br /><br />

    После релиза проекта (26.12.2023) появились различные провайдеры для некоторых социальных сетей, к примеру <a href="https://t.me/fu_andcool_bot">Telegram*</a>, <a href="https://discord.com/users/1201599088534225008">Discord</a>, а так же <a href="https://github.com/Andcool-Systems/context_uploader">программа</a> для контекстного меню Windows.
    Все смежные проекты на данный момент используют оффициальный <a href="https://github.com/Andcool-Systems/FileUploader-python">пакет</a> для Python, в котором описан весь <a href="https://github.com/Andcool-Systems/File-uploader/blob/main/README.md">API</a>.<br /><br />

    <span style={{ color: "#8E8E8E" }}>* – Больше не поддерживается</span></>


const ppl = <>Серия решений для добавления атрибутики Minecraft сервера <a href="https://pepeland.net" target="_blank">PepeLand</a> в виде повязки с лягушкой pepe на Ваш скин.</>
const ppl_more = <><br /><br />
    Всего было 3 реализации данного проекта:<br />
    <b>1. Telegram бот v1.0</b> (02.06.2023 – 06.03.2024) Первая реализация проекта в виде телеграм бота на Python и Aiogram 2. Он проработал 9 месяцев без значительных падений.<br />
    <b>2. <a href="https://t.me/pplBandageBot" target="_blank">Telegram бот v2.0</a></b> (06.03.2024 – 02.06.2024) Всвязи со сложностью обновления старого бота был создан новый, где использовался Aiogram 3. Версия 2.0 имела обновлённый клавиатурный интерфейс и оптимизированный метод рендера.<br />
    <b>3. <a href="https://pplbandage.ru" target="_blank">Сайт pplbandage.ru</a></b> (08.03.2024) Для охвата большей аудитории был создан сайт. Он почти полностью повторяет функционал второго бота за исключением некоторых нюансов. Сайт написан на React.JS и работает до сих пор.<br /><br />

    Изначально, у сайта не должно было быть бекенда, но из-за CORS политики браузеров был написан <a target="_blank" href="https://github.com/Andcool-Systems/Eldraxis">API</a>, повторяющий Skin API Mojang, а так же имеющий функцию кеширования запросов.<br /><br />
    <b>30.05.2024</b> Началась разработка второй версии сайта с повязками, которая должна была полностью изменить клиентский код сайта, избавив его от многочисленных багов и недоработок. Но вторая версия так и не была официально выпущена в свет из-за начала разработки третьей версии.
    Третья (текущая на данный момент) версия принесла с собой полную переработку как клиента, так и сервера. Была добавлена система аккаунтов, каждые отдельные повязки теперь имеют свою страницу, а главным нововведением является мастерская. Теперь любой желающий может создать свою повязку и поделиться ею с другими.
    Релиз третьей версии состоялся 9 Июля 2024 года.<br /><br />
    <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Fpplbandage.ru%2Fapi%2Fv1%2Fworkshop%2Fcount%2Fbadge" />
    <br /><br />Из статистики, пиковый онлайн в первой версии бота составлял 110 человек за сутки. Всего бота использовало более 2 тысяч человек.</>

export const weather = <>Виджет погоды в виде изображения, который Вы можете установить куда угодно, например, в README своего профиля GitHub.</>

export const weather_more = <><br /><br />
    Виджет имеет 2 темы:<br />
    <b>1.</b> Адаптированная под тёмную тему GitHub тема. (Стандартная)<br />
    <b>2.</b> Город в стиле pixel art. by WavyCat<br /><br />

    Изначально создавался для личного профиля и не должен был быть открытым, но впоследствии код был выложен на GitHub.<br /><br />

    Рабочий пример:<br /><img style={{ maxWidth: "100%" }} src="https://weather.andcool.ru/api?place=moscow&timezone=gmt3&language=ru" alt="weather widget"></img></>


export const bf = <>Интерпретатор языка BrainFuckA, написанный на языке Python. BrainFuckA - это brainfuck-подобный язык программирования с дополнениями для удобства.</>

export const bf_more = <><br /><br />Проект разрабатывался для практики в программировании, а так же из-за желания понять, как работает интерпретация языка изнутри.<br /><br />
    Впоследствии язык был доработан добавлением 8 дополнительных инструкций, что увело его от оригинального концепта, хотя код на чистом BrainFuck так же стабильно работает на этом интерпретаторe.
    Были добавлены несколько настроек интерпретатора, позволившие более точно управлять памятью.<br /><br />
    Совокупность этих изменений породило новую разновидность языка — BrainFuckA (хотя изначальное название планировалось BrainFuck+, но это название было занято)<br /><br />
    Так же вместе с интерпретатором идёт форматировщик кода, который может распределить код по вложенным [] блокам и сделать нужные отступы.</>


export const oauth = <>Сервис, позволяющий создавать аутентификацию через Minecraft аккаунт без надобности запрашивать логин и пароль у пользователя.</>

export const oauth_more = <><br /><br />Проект разрабатывался как замена сервису mc-oauth.com, так как на момент создания сервиса он был отключён.<br /><br />Вначале был создан серверный плагин на версию 1.20,
    который поднимал API на 8089 порту. При входе на сервер плагин генерировал 6-значный код, с которым ассоциировал никнейм и uuid зашедшего игрока. Этот код имел срок действия в 5 минут, после истечения которого получить информацию об игроке
    было невозможно. Позже плагин вместе с игровым сервером были перенесены на VPS. Даже при услови того, что сервер был запущен с плагинами на оптимизацию и минимальным настройками, он все равно тратил <b>слишком</b> много ресурсов. Всвязи с этим было принято
    решение разработать сервер авторизации Yggdrasil с нуля и имеющий только поток авторизации для клиентов.<br /><br />После этого был создан сервер авторизации на JAVA, использующий официальный сервер сессий Mojang, а соответственно являющийся лицензионным.
    Сервер имеет только описание потока авторизации, а поэтому не нагружает сервер. При разработке использовался код открытого серверного ядра на JAVA Glowstone.<br /><br />Этот проект используется в других моих проектах.</>


export const newAndcool = <>Новый персональный сайт, который должен был заменить текущий. Однако разработка была приостановлена из-за отсутствия времени и малой содержательности сайта.</>

export const projects = [
    {
        id: 'pplbandage',
        title: 'Повязки PepeLand',
        creation_date: '01.06.2023',
        icon: {
            url: './static/ppl.png',
            color: '#a0a0a0'
        },
        short_description: ppl,
        full_description: ppl_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://pplbandage.ru'
            },
            {
                title: 'Сборник всех репозиториев',
                url: 'https://github.com/PPLBandage'
            }
        ]
    },
    {
        id: 'fileuploader',
        title: 'File Uploader',
        creation_date: '18.12.2023',
        icon: {
            url: './static/fu.png',
            color: '#3E3E3E'
        },
        short_description: fu,
        full_description: fu_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://fu.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/File-uploader'
            }
        ]
    },
    {
        id: 'newAndcool',
        title: 'Новый личный сайт',
        creation_date: '02.09.2024',
        icon: {
            url: './static/andcool.jpg',
            color: '#0B5000'
        },
        short_description: newAndcool,
        links: [
            {
                title: 'Сайт',
                url: 'https://new.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/andcool-site-v4'
            }
        ]
    },
    {
        id: 'mc-oauth',
        title: 'MC-OAuth',
        creation_date: '31.05.2024',
        icon: {
            url: './static/mc-oauth.png',
            color: '#009149'
        },
        short_description: oauth,
        full_description: oauth_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://mc-oauth.andcool.ru'
            },
            {
                title: 'Исходный код плагина',
                url: 'https://github.com/Andcool-Systems/mc-oauth'
            },
            {
                title: 'Страница на Modrinth',
                url: 'https://modrinth.com/plugin/mc-oauth'
            },
            {
                title: 'Исходный код сервера',
                url: 'https://github.com/Andcool-Systems/MC-OAuth_server'
            }
        ]
    },
    {
        id: 'weatherWidget',
        title: 'Weather Widget',
        creation_date: '20.08.2023',
        icon: {
            url: './static/weather.svg',
            color: '#4F5D73'
        },
        short_description: weather,
        full_description: weather_more,
        links: [
            {
                title: 'Сайт',
                url: 'https://weather.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/weather-widget-api'
            }
        ]
    },
    {
        id: 'brainfuck',
        title: 'BrainFuck interpreter',
        creation_date: '14.08.2023',
        icon: {
            url: './static/bf.png',
            color: '#3E3E3E'
        },
        short_description: bf,
        full_description: bf_more,
        links: [
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/brainfuck'
            }
        ]
    }
]
