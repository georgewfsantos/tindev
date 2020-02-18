import React from 'react';
import {Platform, StatusBar} from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    </>
  );
}
