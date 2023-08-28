import { useState, useEffect, useRef } from 'react';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import Account from '~/components/Account';

const cn = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);

    const inputRef = useRef();

    const handleSearchValue = () => {
        inputRef.current.focus();
        setSearchValue('');
        setSearchResult([]);
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);

    return (
        <HeadlessTippy
            interactive={true}
            visible={showResult && searchResult.length > 0}
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
            onClickOutside={handleHideResult}
        >
            <div className={cn('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placement="bottom"
                    placeholder={'Search accounts and videos'}
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button className={cn('search-clear')} onClick={handleSearchValue}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cn('loading')} icon={faSpinner} /> */}
                <HeadlessTippy content="Search">
                    <button className={cn('search-button')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </HeadlessTippy>
            </div>
        </HeadlessTippy>
    );
}

export default Search;
