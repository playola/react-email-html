import React from 'react';
import Image from './Image';

export default {
  title: 'Core/Image',
  component: Image,
};

// Your public Google Drive id here.
const googleDriveImageId = '1PMQf1A3V2EKg8GjxIUxuZQmksi4Hv4Wi';

export const Default = () => (
  <Image url={googleDriveImageId} />
);
