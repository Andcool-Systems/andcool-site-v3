'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/app/styles/not-found.module.css';

const Dot404Canvas = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = 200;
        canvas.height = 100;

        const text = '404';
        const fontSize = 100;
        const density = 3;

        ctx.font = `bold ${fontSize}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = 'black';
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const imageData = ctx.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
        ).data;

        const points: { x: number; y: number }[] = [];
        for (let y = 0; y < canvas.height; y += density) {
            for (let x = 0; x < canvas.width; x += density) {
                const index = (y * canvas.width + x) * 4;
                if (imageData[index + 3] > 128) {
                    points.push({
                        x,
                        y
                    });
                }
            }
        }

        const animate = () => {
            const rect = canvasRef.current.getBoundingClientRect();

            canvas.width = rect.width;
            canvas.height = rect.height;
            const koef = rect.width / 200;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const time = new Date().getTime();

            points.forEach((point, i) => {
                const alpha =
                    ((Math.sin(time / 800 + i * 42) + 1) / 2) * 0.4 + 0.6;

                ctx.fillStyle = `color-mix(in srgb, #20a65a ${
                    alpha * 100
                }%, transparent)`;
                ctx.beginPath();
                ctx.arc(
                    point.x * koef,
                    point.y * koef,
                    koef * alpha,
                    0,
                    Math.PI * 2
                );
                ctx.fill();
            });
        };

        const interval = setInterval(animate, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.side}>
                <div className={styles.text_container}>
                    <h2>Кажется, запрашиваемая страница не найдена (</h2>
                    <p>Проверьте введенный URL</p>
                </div>
            </div>
            <canvas className={styles.canvas} ref={canvasRef} />
        </main>
    );
};

export default Dot404Canvas;
