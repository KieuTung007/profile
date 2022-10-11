import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import images from '~/assets/images';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <img className={cx('image')} src={images.avt} alt="avatar" />
                <ul className={cx('list-page')}>
                    <li className={cx('page-item')}>About</li>
                    <li className={cx('page-item')}>Overview</li>
                    <li className={cx('page-item')}>Education</li>
                    <li className={cx('page-item')}>Skills</li>
                    <li className={cx('page-item')}>Work experience</li>
                    <li className={cx('page-item')}>Projects</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
