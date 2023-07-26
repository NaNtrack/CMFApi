import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {DolarScreen} from './src/screens/DolarScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';

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
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={({route}: any) => ({title: route.params.title})}
      />
    </Stack.Navigator>
  );
}

export default App;
