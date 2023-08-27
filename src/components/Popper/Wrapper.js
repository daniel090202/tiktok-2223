import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cn = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cn('wrapper', className)}>{children}</div>;
}

export default Wrapper;
