import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const cn = classNames.bind(styles);

function Account() {
    return (
        <div className={cn('wrapper')}>
            <img
                className={cn('account-avatar')}
                src="https://i.pinimg.com/564x/29/43/a0/2943a0525383b68070779d5b1e654bdf.jpg"
                alt="User Avatar."
            />
            <div className={cn('account-informations')}>
                <h4 className={cn('account-id')}>
                    <span>daniel090202</span>
                    <FontAwesomeIcon className={cn('account-check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cn('account-name')}>Daniel Nguyen</span>
            </div>
        </div>
    );
}

export default Account;
