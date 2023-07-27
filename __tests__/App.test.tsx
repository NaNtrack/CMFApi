/**
 * @format
 */

import 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import {it, expect} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

it('renders correctly', async () => {
  renderer.create(
    <NavigationContainer>
      <App />
    </NavigationContainer>,
  );

  await act(async () => {
    expect(true).toBeTruthy();
  });
});
