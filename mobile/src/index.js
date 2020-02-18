import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, YellowBox} from 'react-native';

YellowBox.ignoreWarnings(['Unrecognized WebSocket']);

import Routes from './routes';

export default function App() {
  return (
    <>
      <Routes />
      <StatusBar backgroundColor="#f5f5f5" barStyle="dark-content" />
    </>
  );
}
