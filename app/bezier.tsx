'use client';

import style from '@/app/styles/bezier.module.css';
import { CSSProperties, useEffect, useRef, useState } from 'react';

interface BezierLineInterface {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    vertical?: boolean;
    reversed?: boolean;
}

const BezierLine = ({
    startX,
    startY,
    endX,
    endY,
    vertical,
    reversed
}: BezierLineInterface) => {
    const ref = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout>(null);

    const animation = () => {
        if (!ref.current) return;
        const delay = 500 + Math.random() * 2000;

        timeoutRef.current = setTimeout(() => {
            ref.current.classList.add(style.play);

            const f = (e: AnimationEvent) => {
                if (!e.animationName.includes('hide')) return;
                ref.current.classList.remove(style.play);

                ref.current.removeEventListener('animationend', f);
                animation();
            };
            ref.current.addEventListener('animationend', f);
        }, delay);
    };

    useEffect(() => {
        animation();

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const [hovered, setHovered] = useState(false);

    const width = Math.abs(endX - startX) || 1;
    const height = Math.abs(endY - startY) || 1;

    const pointStartX = startX < endX ? 0 : width;
    const pointEndX = startX < endX ? width : 0;

    const pointStartY = startY < endY ? 0 : height;
    const pointEndY = startY < endY ? height : 0;

    const controlX1 = !vertical
        ? pointEndX - Math.abs(pointEndX - pointStartX) * 0.33
        : pointStartX;
    const controlY1 = !vertical
        ? pointStartY
        : startY < endY
          ? pointEndY - Math.abs(pointEndY - pointStartY) * 0.33
          : pointEndY + Math.abs(pointEndY - pointStartY) * 0.33;
    const controlX2 = !vertical
        ? pointStartX + Math.abs(pointEndX - pointStartX) * 0.33
        : pointEndX;
    const controlY2 = !vertical
        ? pointEndY
        : startY < endY
          ? pointStartX + Math.abs(pointEndY - pointStartY) * 0.33
          : pointStartX + Math.abs(pointEndY - pointStartY) * 0.66;

    const path = `M ${pointStartX} ${pointStartY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${pointEndX} ${pointEndY}`;

    return (
        <div ref={ref} className={style.cont}>
            <svg
                width={width}
                height={height}
                style={{
                    overflow: 'visible',
                    position: 'absolute',
                    top: Math.min(startY, endY),
                    left: Math.min(startX, endX),
                    pointerEvents: 'none'
                }}
            >
                <path
                    d={path}
                    stroke="gray"
                    fill="transparent"
                    style={{ overflow: 'visible' }}
                    strokeWidth="2"
                />
            </svg>
            <div
                className={`${style.bezier} ${hovered && style.hovered}`}
                style={{ top: startY, left: startX }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />
            <div
                className={`${style.bezier} ${hovered && style.hovered}`}
                style={{ top: endY, left: endX }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            />

            <div
                className={style.spark}
                style={
                    {
                        '--path': `path("${path}")`,
                        '--dir': reversed ? `reverse` : `forwards`,
                        '--bez': reversed
                            ? `cubic-bezier(0.14, 0.61, 0.61, 0.93)`
                            : `cubic-bezier(0.39, 0.07, 0.86, 0.39)`,
                        '--start-offset': reversed ? '100%' : '0%',
                        '--end-offset': reversed ? '0%' : '100%',
                        top: Math.min(startY, endY),
                        left: startX
                    } as CSSProperties
                }
            />
        </div>
    );
};

export default BezierLine;
