import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';
import Content from './Content';
const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <Sidebar />
            <Content />
        </div>
    );
}

export default DefaultLayout;
