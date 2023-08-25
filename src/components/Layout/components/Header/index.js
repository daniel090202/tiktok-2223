import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const cn = classNames.bind(styles);

function Header() {
    return (
        <header className={cn('wrapper')}>
            <div className={cn('inner')}>
                <div className={cn('logo')}>
                    <img src={images.logo} alt="TikTok Logo" />
                </div>
                <div className={cn('search')}>
                    <input placeholder={'Search accounts and videos'} spellCheck={false} />
                    <button className={cn('search-clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cn('loading')} icon={faSpinner} />
                    <button className={cn('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
                <div className={cn('actions')}></div>
            </div>
        </header>
    );
}

export default Header;
