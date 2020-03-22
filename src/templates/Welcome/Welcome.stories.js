import React from 'react';
import Welcome from './Welcome';

export default {
  title: 'Templates/Welcome',
  component: Welcome,
};

export const Default = () => {
  // Your public Google Drive id here.
  const googleDriveImageId = '1PMQf1A3V2EKg8GjxIUxuZQmksi4Hv4Wi';
  return (
    <Welcome
      title="Welcome to React email html 😄"
      welcomeText="Hello world always is a good welcome text"
      descriptionText="Here we have the description text with your token:"
      tokenText="ABCDEF"
      align="center"
      imageUrl={googleDriveImageId}
      linkTo="https://playolaizq.com"
    />
  );
};
