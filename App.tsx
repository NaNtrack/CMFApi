import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {DolarScreen} from './src/screens/DolarScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Indicadores" component={HomeScreen} />
      <Stack.Screen
        name="DolarScreen"
        component={DolarScreen}
        options={{title: 'Dólar'}}
      />
    </Stack.Navigator>
  );
}

export default App;
