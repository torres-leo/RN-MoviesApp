import React from 'react';

import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from './presentation/navigation/Navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
