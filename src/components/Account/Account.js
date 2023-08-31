import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './Account.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

import { Image } from '~/components/Image';

const cn = classNames.bind(styles);

function Account({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cn('wrapper')}>
            <Image className={cn('account-avatar')} src={data.avatar} alt={data.full_name} />
            <div className={cn('account-informations')}>
                <h4 className={cn('account-id')}>
                    <span>{data.full_name}</span>
                    {data.tick === true && (
                        <FontAwesomeIcon className={cn('account-check')} icon={faCheckCircle}></FontAwesomeIcon>
                    )}
                </h4>
                <span className={cn('account-name')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

// Props Type Library To Validate The Parameter Of Function Components
Account.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Account;
