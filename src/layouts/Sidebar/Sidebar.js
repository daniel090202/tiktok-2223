import config from '~/config';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { Item } from './Menu';
import {
    RegularHomeIcon,
    SolidHomeIcon,
    RegularUserGroupIcon,
    SolidUserGroupIcon,
    RegularLiveIcon,
    SolidLiveIcon,
} from '~/components/Icons';

const cn = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cn('wrapper')}>
            <Menu>
                <Item
                    title="For You"
                    to={config.routes.home}
                    icon={<RegularHomeIcon />}
                    activeIcon={<SolidHomeIcon />}
                />
                <Item
                    title="Following"
                    to={config.routes.following}
                    icon={<RegularUserGroupIcon />}
                    activeIcon={<SolidUserGroupIcon />}
                />
                <Item title="LIVE" to={config.routes.live} icon={<RegularLiveIcon />} activeIcon={<SolidLiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
