import { useState, useEffect, useRef } from 'react';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { search as searchService } from '~/services/searchService';
import { Account } from '~/components/Account';
import { Wrapper as PopperWrapper } from '~/components/Popper';

import { useDebounce } from '~/components/hooks';
const cn = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleSearchValue = () => {
        inputRef.current.focus();
        setSearchValue('');
        setSearchResult([]);
    };

    const handleHideResult = (e) => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    const handleSubmit = (e) => {};

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);
            const response = await searchService(debouncedValue);
            setSearchResult(response);
            setLoading(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
        <div>
            <HeadlessTippy
                interactive={true}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cn('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cn('search-title')}>Accounts</h4>
                            {searchResult.map((account) => (
                                <Account key={account.id} data={account} />
                            ))}
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
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cn('search-clear')} onClick={handleSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cn('loading')} icon={faSpinner} />}
                    <HeadlessTippy content="Search">
                        <button
                            className={cn('search-button')}
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleSubmit}
                        >
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </HeadlessTippy>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
