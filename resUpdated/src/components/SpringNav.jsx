import React, { useState, useEffect } from 'react';
import { useTransition, animated, useSpringRef } from '@react-spring/web';
import styles from './Styles.module.css';

const pages = [
    ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style), { background: 'lightpink' }) }, "A"),
    ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style), { background: 'lightblue' }) }, "B"),
    ({ style }) => React.createElement(animated.div, { style: Object.assign(Object.assign({}, style), { background: 'lightgreen' }) }, "C"),
];
export default function App() {
    const [index, set] = useState(0);
    const onClick = () => set(state => (state + 1) % 3);
    const transRef = useSpringRef();
    const transitions = useTransition(index, {
        ref: transRef,
        keys: null,
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    });
    useEffect(() => {
        transRef.start();
    }, [index]);
    return (React.createElement("div", { className: `flex fill ${styles.container}`, onClick: onClick }, transitions((style, i) => {
        const Page = pages[i];
        return React.createElement(Page, { style: style });
    })));
}
