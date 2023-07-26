import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {DetailsScreen} from './src/screens/DetailsScreen';
import {IndicadorScreen} from './src/screens/IndicadorScreen/IndicadorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Indicadores" component={HomeScreen} />
      <Stack.Screen
        name="IndicadorScreen"
        component={IndicadorScreen}
        options={({route}: any) => ({title: route.params.title})}
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
