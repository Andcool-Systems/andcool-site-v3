const render = async (component: React.ReactElement) => {
    const ReactDOMServer = (await import('react-dom/server')).default;
    return ReactDOMServer.renderToString(component);
};

const ServerElement = () => {
    return (
        <svg
            version="1.1"
            baseProfile="full"
            width={300}
            height={200}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="100%" fill="red" />
            <text x={150} y={50} fontSize={20} textAnchor="middle" fill="white">
                Ты думал тут что-то будет?
            </text>
        </svg>
    );
};

export async function GET() {
    const html = await render(ServerElement());
    return new Response(html, { headers: { 'Content-Type': 'image/svg+xml' } });
}
