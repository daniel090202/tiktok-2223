import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faEllipsisVertical,
    faGlobe,
    faArrowUpFromBracket,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';

import { MessageIcon, InboxIcon } from '~/components/Icons';
import Button from '~/components/Button';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import Search from '~/layouts/components/Search';

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
    const handleMenuChange = (menuItem) => {
        return;
    };

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
                    <Link className={cn('logo-link')} to={config.routes.home}>
                        <img src={images.logo} alt="TikTok Logo" />
                    </Link>
                </div>
                <Search />
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
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inboxs" placement="bottom">
                                <button className={cn('action-button')}>
                                    <InboxIcon />
                                    <span className={cn('inbox-icon')}>32</span>
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
                            <Image
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
