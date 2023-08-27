import { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faSpinner, faMagnifyingGlass, faEllipsisVertical, faGlobe } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Account from '~/components/Account';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cn = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vn',
                    title: 'Vietnam',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback And Helps',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard Shortcuts',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    return (
        <header className={cn('wrapper')}>
            <div className={cn('inner')}>
                <div className={cn('logo')}>
                    <img src={images.logo} alt="TikTok Logo" />
                </div>
                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cn('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cn('search-title')}>Accounts</h4>
                                <Account />
                                <Account />
                                <Account />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cn('search')}>
                        <input placeholder={'Search accounts and videos'} spellCheck={false} />
                        <button className={cn('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cn('loading')} icon={faSpinner} />
                        <Tippy content="Search">
                            <button className={cn('search-button')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </Tippy>
                    </div>
                </Tippy>
                <div className={cn('actions')}>
                    <Button text>Upload</Button>
                    <Button primary>Login</Button>
                    <Menu menuItems={MENU_ITEMS}>
                        <button className={cn('selection-icon')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
