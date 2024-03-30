export const fu = <>Самый простой способ обмениваться файлами со своими друзьями. Проект позволяет обмениваться Вашими файлами через ссылки, а получателю не обязательно иметь аккаунт на сайте.</>

export const fu_more = <><br/><br/>Сайт и API хостятся на моей OrangePi 3 LTS.<br/>
Бекенд проекта написан на Python и FastAPI, а в качестве базы данных используется Prisma ORM. Фронтенд является статическими страницами и написан на стандартных HTML, CSS, JS.<br/><br/>

После релиза проекта (26.12.2023) появились различные провайдеры для некоторых социальных сетей, к примеру <a href="https://t.me/fu_andcool_bot">Telegram*</a>, <a href="https://discord.com/users/1201599088534225008">Discord</a>, а так же <a href="https://github.com/Andcool-Systems/context_uploader">программа</a> для контекстного меню Windows. 
Все смежные проекты на данный момент используют оффициальный <a href="https://github.com/Andcool-Systems/FileUploader-python">пакет</a> для Python, в котором описан весь <a href="https://github.com/Andcool-Systems/File-uploader/blob/main/README.md">API</a>.<br/><br/>

<span style={{color: "#8E8E8E"}}>* – Больше не поддерживается</span></>


export const ppl = <>Серия решений для добавления атрибутики Minecraft сервера <a href="https://pepeland.net" target="_blank">PepeLand</a> на Ваш скин.</>

export const ppl_more = <><br/><br/>
Всего было 3 реализации данного проекта:<br/>
<b>1. Telegram бот v1.0</b> (02.06.2023 – 06.03.2024) Первая реализация проекта в виде телеграм бота на Python и Aiogram 2. Он проработал 9 месяцев без значительных падений.<br/>
<b>2. <a href="https://t.me/pplBandageBot" target="_blank">Telegram бот v2.0</a></b> (06.03.2024 – 02.06.2024) Всвязи со сложностью обновления старого бота был создан новый, где использовался Aiogram 3. Версия 2.0 имела обновлённый клавиатурный интерфейс и оптимизированный метод рендера.<br/>
<b>3. <a href="https://pplbandage.ru" target="_blank">Сайт pplbandage.ru</a></b> (08.06.2024) Для охвата большей аудитории был создан сайт. Он практически полностью повторяет функционал второго бота за исключением некоторых нюансов. Сайт написан на ReactJs и работает до сих пор.<br/><br/>

Изначально, у сайта не должно было быть бекенда, но из-за CORS политики браузеров был написан <a target="_blank" href="https://github.com/Andcool-Systems/Minecraft-skin-API">API</a>, повторяющий Skin API Mojang, а так же имеющий функцию кеширования запросов.<br/><br/>
Из статистики, пиковый онлайн в первой версии бота составлял 110 человек за сутки. Всего бота использовало более 2 тысяч человек.</>

export const wetaher = <>Виджет погоды в виде изображения, который Вы можете установить куда угодно, например, в README своего профиля GitHub.</>

export const wetaher_more = <><br/><br/>
Виджет имеет 2 темы:<br/>
<b>1.</b> Адаптированная под тёмную тему GitHub тема. (Стандартная)<br/>
<b>2.</b> Город в стиле pixel art. by WavyCat<br/><br/>

Изначально создавался для личного профиля и не должен был быть открытым, но впоследствии код был выложен на GitHub.<br/><br/>

Рабочий пример:<br/><img style={{maxWidth: "100%"}} src="https://weather.andcool.ru/api?place=moscow&timezone=gmt3&language=ru" alt="weather widget"></img></>