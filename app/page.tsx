import ClientHome from '@/app/client';

const getTime = (): string => {
    return new Date().toLocaleString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false,
        timeZone: 'Etc/GMT-3'
    });
}

const Home = async () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const birthday = day === 7 && month === 9;
    const christmas = (day === 31 && month === 12) || (day === 1 && month === 1);
    return (
        <ClientHome birthday={birthday} christmas={christmas} timeServer={getTime()} />
    )
}

export default Home;
export const dynamic = 'force-dynamic';