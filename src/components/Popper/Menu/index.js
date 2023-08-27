import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Item from './Item';
import Header from './Header';

const cn = classNames.bind(styles);

function Menu({ children, menuItems = [] }) {
    const renderMenuItems = () => {
        return menuItems.map((menuItem, index) => <Item key={index} data={menuItem}></Item>);
    };

    return (
        <Tippy
            delay={[0, 800]}
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cn('selection-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cn('selection-popper')}>
                        <Header title="Languages" />
                        {renderMenuItems()}
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
