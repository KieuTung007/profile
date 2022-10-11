import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Sidebar({ onIndex, index }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('image')} src={images.avt} alt="avatar" />
                <ul className={cx('list-page')}>
                    <li
                        className={index === 0 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(0)}
                    >
                        About
                    </li>
                    <li
                        className={index === 1 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(1)}
                    >
                        Overview
                    </li>
                    <li
                        className={index === 2 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(2)}
                    >
                        Education
                    </li>
                    <li
                        className={index === 3 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(3)}
                    >
                        Skills
                    </li>
                    <li
                        className={index === 4 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(4)}
                    >
                        Work experience
                    </li>
                    <li
                        className={index === 5 ? cx('page-item', 'active') : cx('page-item')}
                        onClick={() => onIndex(5)}
                    >
                        Projects
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
