import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Button from '~/components/Button';

const cn = classNames.bind(styles);

function Item({ data }) {
    return (
        <Button className={cn('menu-item')} to={data.to} leftIcon={data.icon}>
            {data.title}
        </Button>
    );
}

export default Item;
