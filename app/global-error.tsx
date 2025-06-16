'use client';

export default function GlobalError({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <html>
            <body>
                <h2>Client error: {error.message ?? 'Unknown error'}</h2>
            </body>
        </html>
    );
}
