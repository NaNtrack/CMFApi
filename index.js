/**
 * @format
 */
import React from 'react';
import {AppRegistry, useColorScheme} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider, createTheme} from '@rneui/themed';

function CMFApp() {
  const isDarkMode = useColorScheme() === 'dark';

  const theme = createTheme({
    mode: isDarkMode ? 'dark' : 'light',
  });

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <App />
        </SafeAreaProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => CMFApp);
