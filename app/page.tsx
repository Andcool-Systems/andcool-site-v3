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


const Home = async () => {
    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const birthday = day === 7 && month === 9;
    const christmas = (day === 31 && month === 12) || (day === 1 && month === 1);
    const age = fullYearsDifference(new Date('2007-09-07'), new Date());
    return (
        <ClientHome
            birthday={birthday}
            christmas={christmas}
            timeServer={getTime()}
            year={new Date().getFullYear()}
            age={age}
        />
    )
}

export default Home;
export const dynamic = 'force-dynamic';