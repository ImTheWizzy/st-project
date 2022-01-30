import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {LogBox} from 'react-native';
import AddPatient from './src/screens/AddPatient';
import ViewPatients from './src/screens/ViewPatients';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddPatient: undefined;
  ViewPatients: undefined;
};

LogBox.ignoreLogs(['NativeBase:']);

const Stack = createNativeStackNavigator();

const headerOptions: NativeStackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#06b6d4',
  },
  headerTintColor: '#FFFFFF',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="Home" component={Home} options={headerOptions} />

          <Stack.Screen
            name="AddPatient"
            component={AddPatient}
            options={{...headerOptions, title: 'Add Patient'}}
          />

          <Stack.Screen
            name="ViewPatients"
            component={ViewPatients}
            options={{...headerOptions, title: 'View Patients'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
