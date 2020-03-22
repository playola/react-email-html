import React from 'react';
import PropTypes from 'prop-types';
import { buttonData, buttonLink } from './Button.styles';

const Button = ({ children, align }) => (
  <tr width="100%">
    <td style={buttonData} align={align}>
      <a
        style={buttonLink}
        href="https://playolaizq.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>
          {children}
        </span>
      </a>
    </td>
  </tr>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Button.defaultProps = {
  align: 'left',
};

export default Button;
