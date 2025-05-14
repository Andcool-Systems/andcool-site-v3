import { ProjectProp } from './components/projectCard.module';

/* eslint-disable @next/next/no-img-element */
const fu = (
    <>
        Самый простой способ обмениваться файлами со своими друзьями. Проект
        позволяет обмениваться файлами через ссылки, а получателю не обязательно
        иметь аккаунт на сайте.
    </>
);
const fu_more = (
    <>
        Бекенд проекта написан на Python и FastAPI, а в качестве базы данных
        используется Prisma ORM. Фронтенд является статическими страницами и
        написан на стандартных HTML, CSS, JS.
        <br />
        <br />
        После релиза проекта (26.12.2023) появились различные провайдеры для
        некоторых социальных сетей, к примеру{' '}
        <a href="https://t.me/fu_andcool_bot">Telegram*</a>,{' '}
        <a href="https://discord.com/users/1201599088534225008">Discord</a>, а
        так же{' '}
        <a href="https://github.com/Andcool-Systems/context_uploader">
            программа
        </a>{' '}
        для контекстного меню Windows. Все смежные проекты на данный момент
        используют официальный{' '}
        <a href="https://github.com/Andcool-Systems/FileUploader-python">
            пакет
        </a>{' '}
        для Python, в котором описан весь{' '}
        <a href="https://github.com/Andcool-Systems/File-uploader/blob/main/README.md">
            API
        </a>
        .<br />
        <br />
        <span style={{ color: '#8E8E8E' }}>* – Больше не поддерживается</span>
    </>
);

const ppl = (
    <>
        Серия решений для добавления атрибутики Minecraft сервера{' '}
        <a href="https://pepeland.net" target="_blank">
            PepeLand
        </a>{' '}
        в виде повязки с лягушкой pepe на Ваш скин.
    </>
);
const ppl_more = (
    <>
        Всего было 3 реализации данного проекта:
        <br />
        <b>1. Telegram бот v1.0</b> (02.06.2023 – 06.03.2024) Первая реализация
        проекта в виде телеграм бота на Python и Aiogram 2. Он проработал 9
        месяцев без значительных падений.
        <br />
        <b>
            2.{' '}
            <a href="https://t.me/pplBandageBot" target="_blank">
                Telegram бот v2.0
            </a>
        </b>{' '}
        (06.03.2024 – 02.06.2024) В связи со сложностью обновления старого бота
        был создан новый, где использовался Aiogram 3. Версия 2.0 имела
        обновлённый клавиатурный интерфейс и оптимизированный метод рендера.
        <br />
        <b>
            3.{' '}
            <a href="https://pplbandage.ru" target="_blank">
                Сайт pplbandage.ru
            </a>
        </b>{' '}
        (08.03.2024) Для охвата большей аудитории был создан сайт. Он почти
        полностью повторяет функционал второго бота за исключением некоторых
        нюансов. Сайт написан на React.JS и работает до сих пор.
        <br />
        <br />
        Изначально, у сайта не должно было быть бекенда, но из-за CORS политики
        браузеров был написан{' '}
        <a target="_blank" href="https://github.com/Andcool-Systems/Eldraxis">
            API
        </a>
        , повторяющий Skin API Mojang, а так же имеющий функцию кеширования
        запросов.
        <br />
        <br />
        <b>30.05.2024</b> Началась разработка второй версии сайта с повязками,
        которая должна была полностью изменить клиентский код сайта, избавив его
        от многочисленных багов и недоработок. Но вторая версия так и не была
        официально выпущена в свет из-за начала разработки третьей версии.
        Третья (текущая на данный момент) версия принесла с собой полную
        переработку как клиента, так и сервера. Была добавлена система
        аккаунтов, каждые отдельные повязки теперь имеют свою страницу, а
        главным нововведением является мастерская. Теперь любой желающий может
        создать свою повязку и поделиться ею с другими. Релиз третьей версии
        состоялся 9 Июля 2024 года.
        <br />
        <br />
        <img
            src="https://img.shields.io/endpoint?url=https%3A%2F%2Fpplbandage.ru%2Fapi%2Fv1%2Fworkshop%2Fcount%2Fbadge"
            alt="badge"
        />
    </>
);

const weather = (
    <>
        Виджет погоды в виде изображения, который Вы можете установить куда
        угодно, например, в README своего профиля GitHub.
    </>
);
const weather_more = (
    <>
        Виджет имеет 2 темы:
        <br />
        <b>1.</b> Адаптированная под тёмную тему GitHub тема. (Стандартная)
        <br />
        <b>2.</b> Город в стиле pixel art. by WavyCat
        <br />
        <br />
        Рабочий пример:
        <br />
        <img
            style={{ maxWidth: '100%' }}
            src="https://weather.andcool.ru/api?place=moscow&timezone=gmt3&language=ru"
            alt="weather widget"
        />
    </>
);

const bf = (
    <>
        Интерпретатор языка BrainFuckA, написанный на языке Python. BrainFuckA -
        это brainfuck-подобный язык программирования с дополнениями для
        удобства.
    </>
);
const bf_more = (
    <>
        Проект разрабатывался для практики в программировании, а так же из-за
        желания понять, как работает интерпретация языка изнутри.
        <br />
        <br />
        Впоследствии язык был доработан добавлением 8 дополнительных инструкций,
        что увело его от оригинального концепта, хотя код на чистом BrainFuck
        так же стабильно работает на этом интерпретаторе. Были добавлены
        несколько настроек интерпретатора, позволившие более точно управлять
        памятью.
        <br />
        <br />
        Совокупность этих изменений породило новую разновидность языка —
        BrainFuckA (хотя изначальное название планировалось BrainFuck+, но это
        название было занято)
        <br />
        <br />
        Так же вместе с интерпретатором идёт форматер кода, который может
        распределить код по вложенным [] блокам и сделать нужные отступы.
    </>
);

const oauth = (
    <>
        Сервис, позволяющий создавать аутентификацию через Minecraft аккаунт без
        надобности запрашивать логин и пароль у пользователя.
    </>
);
const oauth_more = (
    <>
        Проект разрабатывался как замена сервису mc-oauth.com, так как на момент
        создания он был отключён.
        <br />С момента создания он претерпел множество изменений. В конечном
        итоге, последняя версия работает на языке программирования Rust и
        используется в проекте PPLBandage.
    </>
);

const newAndcool = (
    <>
        Новый персональный сайт, который должен был заменить текущий. Однако
        разработка была приостановлена из-за отсутствия времени и малой
        содержательности сайта.
    </>
);

const activity = (
    <>
        Сервис, позволяющий регистрировать активность в редакторе кода и
        получать его через RestFul API.
    </>
);
const activity_more = (
    <>
        Данный проект разрабатывался как часть для нового личного сайта. Однако
        из-за остановки разработки родительского проекта, API был переделан под
        виджет, который можно добавить в свой GitHub README.
        <br />
        Основной идеей проекта является установка специального расширения в свой
        редактор кода (на данный момент только VSCode) и получение виджета по
        ссылке.
        <br />
        <br />
        Рабочий пример: <br />
        <img
            style={{ maxWidth: '100%' }}
            src="https://activity.andcool.ru/ld0jjb/widget"
            alt="Activity widget"
        />
    </>
);

const json_stats = (
    <>Виджет для профиля GitHub в виде редактора кода VSCode и JSON.</>
);
const json_stats_more = (
    <>
        Этот виджет обобщает все ранее созданные проекты для моего профиля
        GitHub и делает его более структурированным и менее разрозненным.
        <br />
        <br />
        Основной идеей, а так же отличительной чертой проекта является
        динамический парсинг JavaScript объектов в SVG, что позволяет отображать
        данные любой сложности и вложенности, ограничиваясь только размерами SVG
        и максимальной глубиной рекурсии в NodeJS. <br />
        <br />
        <img
            style={{ maxWidth: '100%' }}
            src="https://json-stats.andcool.ru"
            alt="Json stats widget"
        />
    </>
);

const pepsi = (
    <>
        Сайт-визитка для приватного дискорд сообщества программистов ❤.
        Создавался как proof-of-concept верстки сайта без точных референсов.
    </>
);

const css_linter = (
    <>Универсальный линтер CSS модулей для Next.Js, написанный на расте.</>
);

const css_linter_more = (
    <>
        Так как VSCode не имеет встроенного линтера для CSS модулей я разработал
        свой плагин с ядром на Rust.
        <br />
        <br />
        Сейчас из функционала линтера он умеет определять неиспользуемые CSS
        классы из модулей и подчеркивать их, а также определять использование
        необъявленных CSS классов внутри tsx файлов.
        <br />
        Из функционала <b>QoL</b>, реализованы: автокомплит для имен классов в
        CSS модуле, поиск дефинишенов для классов и модулей, отображение
        содержимого класса при наведении на его имя в tsx файле, а также
        извлечение inline-стилей в отдельный CSS модуль.
    </>
);

const next_cookies = (
    <>
        TypeScript пакет для Next.Js, позволяющий получать Cookie-файлы на
        стороне клиента до полной гидрации React приложения.
    </>
);

const next_cookies_more = (
    <>
        Cookie-файлы получаются на стороне сервере, а затем прокидываются до
        клиента. Таким образом, разработчики могут легко реализовывать темы,
        языки или иные настройки сайта без нужды заботиться о состоянии
        компонентов до гидрации.
        <br />
        <br />
        Этот пакет активно используется на большинстве моих Next.Js проектов.
    </>
);

const html8 = (
    <>
        Proof-of-concept компилируемого, статически строго типизируемого языка
        программирования с синтаксисом HTML.
    </>
);
const html8_more = (
    <>
        Проект создавался ради шутки, однако сейчас имеет более 2-х тысяч строк
        кода. Написанный на Rust и компилируемый в СИ, он послужил отличной
        практикой в написании фронтендов языков, а так же в более глубоком
        понимании их работы.
    </>
);

export const projects: ProjectProp[] = [
    {
        id: 'pplbandage',
        title: 'Повязки PepeLand',
        creation_date: '01.06.2023',
        tags: ['Next.Js', 'Nest.Js', 'Prisma ORM'],
        icon: {
            url: '/static/ppl.png',
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
        end_of_support: '29.04.2025',
        tags: ['HTML', 'FastAPI', 'Prisma ORM'],
        icon: {
            url: '/static/fu.png',
            color: '#3E3E3E'
        },
        short_description: fu,
        full_description: fu_more,
        links: [
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/File-uploader'
            }
        ]
    },
    {
        id: 'mc-oauth',
        title: 'MC-OAuth',
        creation_date: '31.05.2024',
        tags: ['Rust', 'Minecraft'],
        icon: {
            url: '/static/mc-oauth.png',
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
                title: 'Исходный код сервера',
                url: 'https://github.com/Andcool-Systems/mc-oauth-rs'
            }
        ]
    },
    {
        id: 'next-cookies',
        title: 'use-next-cookie',
        creation_date: '28.02.2025',
        tags: ['TypeScript', 'Next.Js', 'Package'],
        icon: {
            url: '/static/placeholder.png',
            color: '#1f1f1f'
        },
        short_description: next_cookies,
        full_description: next_cookies_more,
        links: [
            {
                title: 'npm',
                url: 'https://www.npmjs.com/package/use-next-cookie'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/use-next-cookie'
            }
        ]
    },
    {
        id: 'pepsi',
        title: 'PEPSI Site',
        creation_date: '10.02.2025',
        tags: ['Next.Js'],
        icon: {
            url: '/static/pepsi.png',
            color: '#080e13'
        },
        short_description: pepsi,
        links: [
            {
                title: 'Сайт',
                url: 'https://pepsi.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/PepsiCommunity/pepsi-site'
            }
        ]
    },
    {
        id: 'css-linter',
        title: 'Next CSS Linter',
        creation_date: '03.03.2025',
        tags: ['Linter', 'Rust', 'Next.Js'],
        icon: {
            url: '/static/linter.png',
            color: '#1e1e1e'
        },
        short_description: css_linter,
        full_description: css_linter_more,
        links: [
            {
                title: 'VSCode Marketplace',
                url: 'https://marketplace.visualstudio.com/items?itemName=AndcoolSystems.next-css-lint'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/css-linter'
            }
        ]
    },
    {
        id: 'newAndcool',
        title: 'Новый личный сайт',
        creation_date: '02.09.2024',
        end_of_support: '09.03.2025',
        tags: ['Next.Js'],
        icon: {
            url: '/static/placeholder.png',
            color: '#1f1f1f'
        },
        short_description: newAndcool,
        links: [
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/andcool-site-v4'
            }
        ]
    },
    {
        id: 'html8',
        title: 'HTML-8',
        creation_date: '14.03.2025',
        tags: ['Proof-of-concept', 'Language', 'Compiler', 'Rust'],
        icon: {
            url: '/static/placeholder.png',
            color: '#1f1f1f'
        },
        short_description: html8,
        full_description: html8_more,
        links: [
            {
                title: 'Исходный код',
                url: 'https://github.com/PepsiCommunity/html8'
            }
        ]
    },
    {
        id: 'json-stats',
        title: 'JSON Stats Widget',
        creation_date: '19.12.2024',
        tags: ['Nest.Js', 'Widget'],
        icon: {
            url: '/static/json_stats.svg',
            color: '#1e1e1e'
        },
        short_description: json_stats,
        full_description: json_stats_more,
        links: [
            {
                title: 'Виджет',
                url: 'https://json-stats.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/json-stats'
            }
        ]
    },
    {
        id: 'weatherWidget',
        title: 'Weather Widget',
        creation_date: '20.08.2023',
        end_of_support: '25.05.2025',
        tags: ['FastAPI', 'Widget'],
        icon: {
            url: '/static/weather.svg',
            color: '#4F5D73'
        },
        short_description: weather,
        full_description: weather_more,
        links: [
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/weather-widget-api'
            }
        ]
    },
    {
        id: 'activityWidget',
        title: 'Activity Widget',
        creation_date: '25.08.2024',
        tags: ['Nest.Js', 'Widget', 'VSCode'],
        icon: {
            url: '/static/activity.svg',
            color: '#4F5D73'
        },
        short_description: activity,
        full_description: activity_more,
        links: [
            {
                title: 'API URL',
                url: 'https://activity.andcool.ru'
            },
            {
                title: 'Исходный код',
                url: 'https://github.com/Andcool-Systems/Andcool-Activity'
            }
        ]
    },
    {
        id: 'brainfuck',
        title: 'BrainFuck interpreter',
        creation_date: '14.08.2023',
        tags: ['Interpreter', 'Programming language'],
        icon: {
            url: '/static/bf.png',
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
];
