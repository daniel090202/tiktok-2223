import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Header from '~/layouts/components/Header';
import Sidebar from './Sidebar';

const cn = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cn('wrapper')}>
            <Header />
            <div className={cn('container')}>
                <Sidebar />
                <div className={cn('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
