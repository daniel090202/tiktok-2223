import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cn = classNames.bind(styles);

function Header({ title, onBack }) {
    return (
        <header className={cn('header')}>
            <button className={cn('button-back')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cn('header-title')}>{title}</h4>
        </header>
    );
}

export default Header;
