import { useState } from 'react';

import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from './Item';
import Header from './Header';

const cn = classNames.bind(styles);

function Menu({ children, menuItems = [], hideOnClick = false, onChange = () => {} }) {
    const [history, setHistory] = useState([{ data: menuItems }]);
    const currentPopper = history[history.length - 1];

    const renderMenuItems = () => {
        return currentPopper.data.map((menuItem, index) => {
            const isParent = !!menuItem.children;

            return (
                <Item
                    key={index}
                    data={menuItem}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, menuItem.children]);
                        } else {
                            onChange(menuItem);
                        }
                    }}
                ></Item>
            );
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            delay={[0, 200]}
            offset={[12, 8]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cn('selection-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cn('selection-popper')}>
                        {history.length > 1 && (
                            <Header
                                className={cn('selection-title')}
                                title="Languages"
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            ></Header>
                        )}
                        <div className={cn('selection-content')}>{renderMenuItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
