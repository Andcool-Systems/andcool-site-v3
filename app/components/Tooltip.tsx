'use client';

import React, { JSX, useState } from 'react';
import Style from '@/app/styles/tooltip.module.css';
import ReactCSSTransition from './CSSTransition';

type StaticTooltipProps = {
    children: JSX.Element | JSX.Element[];
    title: string;
};

export const StaticTooltip = (props: StaticTooltipProps) => {
    const [displayed, setDisplayed] = useState<boolean>(false);
    return (
        <span
            onMouseEnter={() => setDisplayed(true)}
            onMouseLeave={() => setDisplayed(false)}
            style={{ position: 'relative', display: 'inline-flex', margin: 0 }}
        >
            <ReactCSSTransition
                state={displayed}
                timeout={200}
                classNames={{
                    enter: Style.staticTooltipEnter,
                    exitActive: Style.staticTooltipEnter
                }}
            >
                <span className={Style.staticTooltip}>
                    {props.title}
                    <span className={Style.pointer} />
                </span>
            </ReactCSSTransition>
            {props.children}
        </span>
    );
};
