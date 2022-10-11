import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Content from './Content';
import { useState, useEffect } from 'react';
const cx = classNames.bind(styles);

function DefaultLayout() {
    const [index, setIndex] = useState(0);

    let scrollToIndex = 0;

    if (index === 1) {
        scrollToIndex = 100;
    }
    if (index === 2) {
        scrollToIndex = 300;
    }
    if (index === 3) {
        scrollToIndex = 550;
    }
    if (index === 4) {
        scrollToIndex = 870;
    }
    if (index === 5) {
        scrollToIndex = 1280;
    }

    const handleIndex = (value) => {
        setIndex(value);
    };

    useEffect(() => {
        window.scrollTo({
            top: scrollToIndex,
            behavior: 'smooth',
        });
    }, [index]);

    return (
        <div className={cx('wrapper')}>
            <Sidebar onIndex={handleIndex} index={index} />
            <Content />
            <button>{index}</button>
        </div>
    );
}

export default DefaultLayout;
