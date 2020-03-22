import React from 'react';
import PropTypes from 'prop-types';
import { headerDataStyle } from './Header.styles';

const Header = ({ children, align }) => (
  <thead>
    <tr width="100%" height="57">
      <td style={headerDataStyle} valign="top" align={align}>
        {children}
      </td>
    </tr>
  </thead>
);

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Header.defaultProps = {
  align: 'left',
};

export default Header;
