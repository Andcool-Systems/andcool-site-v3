"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

interface ComponentProps {
    children: ReactNode;
}

export const Card3D: React.FC<ComponentProps> = (props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [brightness, setBrightness] = useState<number>(1);
    const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
    const [scale, setScale] = useState<number>(1);
    
    useEffect(() => {
        if (ref.current) {
          	const { width, height } = ref.current.getBoundingClientRect();
          	setDimensions({ width, height });
        }
      }, []);

    
    const handleMouseLeave = () => {
        setTransform({x: 0, y: 0});
        setBrightness(1);
        setScale(1);
    };

    function map(val: number, minA: number, maxA: number, minB: number, maxB: number) {
        return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    }
  
    const handleMouseMove = (e: React.MouseEvent) => {
        if (ref.current) {
            const koef = 1.0;
            const width = dimensions.width;
            const height = dimensions.height;
            const rect = ref.current.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const rotateY = map(mouseX, 0, width / koef, -30, 30);
            const rotateX = map(mouseY, 0, height / koef, 30, -30);
            const brightness = map(mouseY, 0, (height / koef) + 50, 1.5, 0.5);
            
            setTransform({x: rotateX, y: rotateY});
            setBrightness(brightness);
            setScale(1.3);
        }
    };

    return (
        <div style={{
            transform: `rotateX(${transform.x}deg) rotateY(${transform.y}deg) scale(${scale})`, 
            filter: `brightness(${brightness})`,
            zIndex: 999,
            position: "relative",
            transition: "all 200ms ease-out",
            imageRendering: "crisp-edges",
            display: "inline-block"}}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={ref}>
            {props.children}
        </div>
    );
};

