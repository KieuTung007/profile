import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Content() {
    return (
        <div className={cx('content')}>
            <div className={cx('about')}>
                <h1> Kiều Anh Tùng</h1>
                <p>Frontend developer</p>
                <div className={cx('info')}>
                    <ul className={cx('info-list')}>
                        <li>
                            <span className={cx('title')}>Name :</span>
                            <p className={cx('title-name')}>Kiều Anh Tùng</p>
                        </li>
                        <li>
                            <span className={cx('title')}>Birth :</span>
                            <p className={cx('title-name')}>10/07/1995</p>
                        </li>
                        <li>
                            <span className={cx('title')}>Address :</span>
                            <p className={cx('title-name')}>Hoàng Mai, Hà Nội</p>
                        </li>
                    </ul>
                    <ul className={cx('info-list')}>
                        <li>
                            <span className={cx('title')}>Email :</span>
                            <p className={cx('title-name')}>Tung.kieuanh@gmail.com</p>
                        </li>
                        <li>
                            <span className={cx('title')}>Phone :</span>
                            <p className={cx('title-name')}>0966143395</p>
                        </li>
                        <li>
                            <span className={cx('title')}>Github :</span>
                            <p className={cx('title-name')}>
                                <a href="https://github.com/KieuTung007">https://github.com/KieuTung007</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('overview')}>
                <h1>Overview</h1>
                <ul>
                    <li>
                        bản thân tôi là một người hòa đồng , vui vẻ ,luôn tuân thủ đúng giờ .Tôi có kinh nghiệm trong
                        lập trình , hiểu biết về tư duy logic và sử lý các tình huống .
                    </li>
                    <li>
                        Mục tiêu ngắn hạn trong thời gian 1 năm tới trở thành một Frontend developer chuyên nghiệp.{' '}
                    </li>
                    <li>Mục tiêu dài hạn trở thành một Leader của team và trở thành một PM .</li>
                </ul>
            </div>
            <div className={cx('education')}>
                <h1>Education</h1>
                <span className={cx('education-title')}>
                    <h2>Đại Học Bách Khoa Hà Nội</h2>
                    <p>10/2013 - 7/2018</p>
                    <h3>Chuyên ngành : Công Nghệ Điều Khiển và Tự Động Hóa</h3>
                </span>
            </div>
            <div className={cx('skill')}>
                <h1>Skills</h1>
                <div>
                    <span className={cx('skill-item')}>
                        <h3>Main</h3>
                        <ul>
                            <li>HTML,CSS,JavaScript</li>
                            <li>ReactJS,Redux,tailwind CSS</li>
                            <li>Quản lý mã nguồn với Git</li>
                        </ul>
                    </span>
                    <span className={cx('skill-item')}>
                        <h3>Other</h3>
                        <ul>
                            <li>Làm việc nhóm</li>
                            <li>Tư duy giải quyết vấn đề</li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className={cx('experience')}>
                <h1>Work experience</h1>
                <div>
                    <h4 className={cx('time')}>02/2022 - Present</h4>
                    <span className={cx('context')}>
                        <h3>Tự học và làm việc với lập trình Web</h3>
                        <p>Frontend Developer</p>
                    </span>
                </div>
                <div>
                    <h4 className={cx('time')}>06/2019 - 01/2022</h4>
                    <span className={cx('context')}>
                        <h3>Công Ty SAOVIET AUTOMATIC., JSC</h3>
                        <p>Lập trình viên PLC</p>
                        <ul>
                            <li>
                                Thiết kế , xây dựng, bảo trì các hệ thống tự động hóa trong các nhà máy sản xuất bao bì
                                carton, bao bì , nước giải khát, bánh kẹo ....
                            </li>
                            <li>Cải tiến cá hệ thống cũ nhằm nâng cao năng suất .</li>
                        </ul>
                    </span>
                </div>
                <div>
                    <h4 className={cx('time')}>07/2017 – 04/2019</h4>
                    <span className={cx('context')}>
                        <h3>Công Ty HTK TECHNOLOGY., JSC</h3>
                        <p>Nhân viên , thực tập sinh thiết kế mạch</p>
                        <ul>
                            <li>
                                Thiết kế và kiểm tra lỗi cho các loại mạch nguồn như : mạch sạc điện thoại, mạch công
                                suất lưu điện, .....
                            </li>
                        </ul>
                    </span>
                </div>
            </div>

            <div className={cx('projects')}>
                <h1>Projects</h1>
                <div className={cx('project-item')}>
                    <h3>PhucLong tea&coffee</h3>
                    <p>(09/2022 - Present)</p>
                    <span className={cx('description')}>
                        <h4>Descriptions :</h4>
                        <p>
                            Xây dựng trang web bán hàng của trà sữa Phúc Long Làm lại web trà Phúc Long về giao diện
                            người dùng trên web, có chức năng đăng nhập, tìm kiếm loại trà , chia các bố cục...
                        </p>
                    </span>
                    <span className={cx('link')}>
                        <h4>Link Github :</h4>

                        <a href="https://github.com/KieuTung007/phuclong-ui">
                            https://github.com/KieuTung007/phuclong-ui
                        </a>
                    </span>
                    <span className={cx('link')}>
                        <h4>Link web demo :</h4>
                        <a href="https://phuclong-ui.vercel.app/">https://phuclong-ui.vercel.app/</a>
                    </span>
                    <span className={cx('link')}>
                        <h4>Technology in use :</h4>
                        <p>Frontend: ReactJS, Redux, Reponsive,Css(scss)</p>
                    </span>
                </div>
                <div className={cx('project-item')}>
                    <h3>Website zingmp3</h3>
                    <p>(07/2022 - 09\2022)</p>
                    <span className={cx('description')}>
                        <h4>Descriptions :</h4>
                        <p>
                            Làm lại trang web của zingmp3 , về phần giao diện người dùng, chức năng phát , dừng, chuyển
                            bài , load bài hát từ link API của Backend
                        </p>
                    </span>
                    <span className={cx('link')}>
                        <h4>Link Github :</h4>

                        <a href="https://github.com/KieuTung007/zingmp3-ui">
                            https://github.com/KieuTung007/zingmp3-ui
                        </a>
                    </span>
                    <span className={cx('link')}>
                        <h4>Technology in use :</h4>
                        <p>- Frontend: ReactJS, Redux, axios, Reponsive, Css(scss)</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Content;
