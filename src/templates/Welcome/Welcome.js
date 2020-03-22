import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../core/Header';
import Image from '../../core/Image';
import Button from '../../core/Button';
import {
  tableContainer,
  contentBody,
  contentData,
  welcomeParagraph,
} from './Welcome.styles';

const Welcome = ({
  title,
  welcomeText,
  descriptionText,
  tokenText,
  imageUrl,
  imageAlignement,
  linkTo,
}) => (
  <table style={tableContainer}>
    <Header>
      {title}
    </Header>
    <tbody style={contentBody}>
      <tr width="100%">
        <td style={contentData} valign="top" align="left">
          <p style={welcomeParagraph}>{welcomeText}</p>
          <p>{descriptionText}</p>
          <p>{tokenText}</p>
        </td>
      </tr>
      <Image url={imageUrl} align={imageAlignement} />
      <Button align="right" linkTo={linkTo}>
        Learn more
      </Button>
    </tbody>
  </table>
);

Welcome.propTypes = {
  title: PropTypes.string,
  welcomeText: PropTypes.string,
  descriptionText: PropTypes.string,
  tokenText: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlignement: PropTypes.oneOf(['left', 'center', 'right']),
  linkTo: PropTypes.string,
};

Welcome.defaultProps = {
  title: 'Welcome',
  welcomeText: '',
  descriptionText: '',
  tokenText: '<TOKEN>',
  imageUrl: '',
  imageAlignement: 'center',
  linkTo: null,
};

export default Welcome;
