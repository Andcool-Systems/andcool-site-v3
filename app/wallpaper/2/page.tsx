"use client";

import style from './style.module.css';
import './globals.css'
import { useEffect } from 'react';

class Animate {
    image: HTMLElement;
    amplitude: number;
    frequency: number;
    speed: number;
    i: number;

    constructor(id: string, amplitude: number, frequency: number, speed: number, offset: number) {
        this.image = document.getElementById(id);
        this.amplitude = amplitude;
        this.frequency = frequency;
        this.speed = speed;
        this.i = offset;
    }

    animate = () => {
        const offset = Math.sin(this.frequency * this.i) * this.amplitude;
        const x = -this.i + offset;
        const y = this.i;
        this.image.style.backgroundPosition = `${x}px ${y}px`;
        this.i += this.speed;
        requestAnimationFrame(this.animate);
    }
}


const Home = () => {
    useEffect(() => {
        const anim = new Animate('dust_1', 50, 0.025, 0.1, 0);
        anim.animate();

        const anim1 = new Animate('dust_2', 60, 0.026, 0.15, 50);
        anim1.animate();

        const anim2 = new Animate('dust_3', 55, 0.024, 0.17, 150);
        anim2.animate();

        const anim3 = new Animate('dust_4', 65, 0.023, 0.09, 300);
        anim3.animate();
    }, [])
    return (
        <>
            <div className={style.container}>
                <img src="/static/wallpaper_2/y_cg2_bg1.png" />
                <img src="/static/wallpaper_2/y_cg2_base.png" />
                <img src="/static/wallpaper_2/y_cg2_exp2.png" />
                <img src="/static/wallpaper_2/y_cg2_details.png" />
            </div>
            <div className={style.dust}>
                <div id="dust_1" className={`${style.dust} ${style.dust_1}`}></div>
                <div id="dust_2" className={`${style.dust} ${style.dust_2}`}></div>
                <div id="dust_3" className={`${style.dust} ${style.dust_3}`}></div>
                <div id="dust_4" className={`${style.dust} ${style.dust_4}`}></div>
            </div>
        </>
    )
}

export default Home;