import React from 'react';
import PropTypes from 'prop-types';

import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    // React.Children.only() accepts only a single React Component as children.
    return React.Children.only(children);
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
