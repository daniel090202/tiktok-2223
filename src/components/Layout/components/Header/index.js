import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faKeyboard, faMessage, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faSpinner,
    faMagnifyingGlass,
    faEllipsisVertical,
    faGlobe,
    faArrowUpFromBracket,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Account from '~/components/Account';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cn = classNames.bind(styles);

const currentUser = true;

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
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

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    const handleMenuChange = (menuItem) => {};

    const currentUserMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View Profile',
            to: '/profile',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log Out',
            to: '/',
            separate: true,
        },
    ];

    return (
        <header className={cn('wrapper')}>
            <div className={cn('inner')}>
                <div className={cn('logo')}>
                    <img src={images.logo} alt="TikTok Logo" />
                </div>
                <HeadlessTippy
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
                        <HeadlessTippy content="Search">
                            <button className={cn('search-button')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </HeadlessTippy>
                    </div>
                </HeadlessTippy>
                <div className={cn('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cn('action-button')}>
                                    <FontAwesomeIcon icon={faArrowUpFromBracket} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Messages" placement="bottom">
                                <button className={cn('action-button')}>
                                    <FontAwesomeIcon icon={faMessage} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Login</Button>
                        </>
                    )}
                    <Menu menuItems={currentUser ? currentUserMenu : MENU_ITEMS} onChange={handleMenuChange()}>
                        {currentUser ? (
                            <img
                                className={cn('current-user-avatar')}
                                src="https://i.pinimg.com/564x/d1/aa/ef/d1aaefd81b0d818b5cded4d422ce41b0.jpg"
                                alt="User's Avatar"
                            />
                        ) : (
                            <button className={cn('selection-icon')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
