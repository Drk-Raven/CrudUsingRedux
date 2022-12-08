import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/components/home';
import Details from './src/components/details';
import DataTables from './src/components/dataTables';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0e0b26',
              },
            }}
          />
          <Stack.Screen name="Details" component={Details} options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0e0b26',
              },
            }}/>
            <Stack.Screen name="Table" component={DataTables} options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: '#0e0b26',
              },
            }}/>
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
