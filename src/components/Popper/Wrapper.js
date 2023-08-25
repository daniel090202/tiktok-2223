import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cn = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cn('wrapper')}>{children}</div>;
}

export default Wrapper;
