import React from 'react';
import PropTypes from 'prop-types';
import { image } from './Image.styles';

const Image = ({ url, align }) => {
  const imgSrc = `https://drive.google.com/uc?export=view&id=${url}`;

  return (
    <tr width="100%">
      <td align={align}>
        <img
          style={image}
          src={imgSrc}
          title="logo"
          alt="logo"
          width="325"
          height="250"
        />
      </td>
    </tr>
  );
};

Image.propTypes = {
  url: PropTypes.string.isRequired,
  align: PropTypes.oneOf(['left', 'center', 'right']),
};

Image.defaultProps = {
  align: 'left',
};

export default Image;
