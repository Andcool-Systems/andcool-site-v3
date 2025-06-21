'use client';

import { useEffect, useRef } from 'react';
import { createNoise3D, NoiseFunction3D } from 'simplex-noise';

const raysCount = 100;
const full_circle = Math.PI * 2;
const scale = 0.8;

const Bubble = ({ fill }: { fill: string }) => {
    const svgRef = useRef<SVGPathElement>(null);
    const animationFrame = useRef<number>(0);
    const noise = useRef<NoiseFunction3D>(null);

    const render = () => {
        let path = '';
        const time = Date.now() / 3000;

        for (
            let angle = 0;
            angle <= full_circle;
            angle += full_circle / raysCount
        ) {
            const nx = Math.cos(angle) * scale;
            const ny = Math.sin(angle) * scale;

            const noise_ = noise.current(nx, ny, time);
            const radius = ((noise_ + 1) / 2) ** 0.1 * 200;

            const x = (Math.cos(angle) * radius + 250).toFixed(2);
            const y = (Math.sin(angle) * radius + 250).toFixed(2);

            if (angle === 0) {
                path = `M${x} ${y}`;
            }

            path += ` L ${x} ${y}`;
        }

        svgRef.current.setAttribute('d', `${path} Z`);
        animationFrame.current = requestAnimationFrame(render);
    };

    useEffect(() => {
        noise.current = createNoise3D(() => Math.random());
        animationFrame.current = requestAnimationFrame(render);

        return () => {
            if (animationFrame.current)
                cancelAnimationFrame(animationFrame.current);
        };
    }, []);

    return <path ref={svgRef} fill={fill} style={{ mixBlendMode: 'color' }} />;
};

const Test = () => {
    return (
        <svg
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            style={{
                position: 'absolute',
                left: 0,
                top: 0,
                filter: 'blur(10px)'
            }}
        >
            <Bubble fill={'#ff0000'} />
            <Bubble fill={'#00ff00'} />
            <Bubble fill={'#0000ff'} />
        </svg>
    );
};

export default Test;
