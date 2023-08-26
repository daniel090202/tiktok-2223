import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cn = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disabled = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    const props = {
        onClick,
        ...passProps,
    };

    let Component = 'button';

    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof key === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Component = 'Link';
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cn('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });

    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cn('icon')}>{leftIcon}</span>}
            <span className={cn('title')}>{children}</span>
            {rightIcon && <span className={cn('icon')}>{rightIcon}</span>}
        </Component>
    );
}

export default Button;
