import { useEffect, useState } from 'react';
import BezierLine from './Bezier';
import styles from '@/app/styles/connects.module.css';

const Connects = () => {
    const [windowSize, setWindowSize] = useState<[number, number]>([0, 0]);
    const [pointsY, setPointsY] = useState<number[]>([0, 0, 0, 0, 0, 0]);
    const [contSize, setContSize] = useState<{
        x: number;
        y: number;
        w: number;
        h: number;
    }>({ x: 0, y: 0, w: 0, h: 0 });

    const updateCont = () => {
        let el = document.getElementById('animated') as HTMLDivElement;

        const rect = el.getBoundingClientRect();
        const style = getComputedStyle(el);
        const matrix = new DOMMatrix(style.transform);

        const scaleX = matrix.a;
        const scaleY = matrix.d;

        const x = rect.left + window.scrollX - matrix.e;
        const y = rect.top + window.scrollY - matrix.f;

        const width = rect.width / scaleX;
        const height = rect.height / scaleY;

        setContSize({
            x,
            y,
            w: width,
            h: height
        });
    };

    const generatePointsY = (h: number) => {
        const get = () => {
            const min = h / 10;
            const max = h - min;
            const step = (max - min) / 3;

            const randomY = Array.from(
                { length: 3 },
                (_, i) => min + i * step + Math.random() * (step - 80)
            );

            randomY.sort((a, b) => a - b);
            return randomY;
        };
        setPointsY([...get(), ...get()]);
    };

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        setWindowSize([window.innerWidth, window.innerHeight]);
        updateCont();
        generatePointsY(window.innerHeight);

        const animated = document.getElementById('animated');
        animated.addEventListener('animationend', updateCont);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    const onWindowResize = (ev: UIEvent) => {
        const target = ev.target as Window;
        setWindowSize([target.innerWidth, target.innerHeight]);
        updateCont();
    };
    return (
        <div className={styles.cont}>
            <BezierLine
                startX={15}
                startY={pointsY[0]}
                endX={contSize.x + 1}
                endY={contSize.y + contSize.h / 2 - 25}
            />

            <BezierLine
                startX={15}
                startY={pointsY[1]}
                endX={contSize.x + 1}
                endY={contSize.y + contSize.h / 2}
            />

            <BezierLine
                startX={15}
                startY={pointsY[2]}
                endX={contSize.x + 1}
                endY={contSize.y + contSize.h / 2 + 25}
            />

            <BezierLine
                startX={contSize.x + contSize.w - 1}
                startY={contSize.y + contSize.h / 2 - 25}
                endX={windowSize[0] - 30}
                endY={pointsY[3]}
                reversed
            />

            <BezierLine
                startX={contSize.x + contSize.w - 1}
                startY={contSize.y + contSize.h / 2}
                endX={windowSize[0] - 30}
                endY={pointsY[4]}
                reversed
            />

            <BezierLine
                startX={contSize.x + contSize.w - 1}
                startY={contSize.y + contSize.h / 2 + 25}
                endX={windowSize[0] - 30}
                endY={pointsY[5]}
                reversed
            />
        </div>
    );
};

export default Connects;
