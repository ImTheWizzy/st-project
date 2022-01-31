import React, {useEffect, useState} from 'react';
import {CloseIcon, NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import {LogBox} from 'react-native';
import AddPatient from './src/screens/AddPatient';
import ViewPatients from './src/screens/ViewPatients';
import CreatePrescription from './src/screens/CreatePrescription';
import CreateReferral from './src/screens/CreateReferral';
import AsyncStorage from '@react-native-community/async-storage';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddPatient: undefined;
  CreatePrescription: undefined;
  CreateReferral: undefined;
  ViewPatients: undefined;
};

LogBox.ignoreLogs(['NativeBase:']);

const App = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const Stack = createNativeStackNavigator();
  // const [user, setUser] = useState<string>('');

  // const handleSignOut = async () => {
  //   await AsyncStorage.removeItem('user');
  //   navigation.navigate('Welcome');
  // };

  const headerOptions: NativeStackNavigationOptions = {
    headerStyle: {
      backgroundColor: '#06b6d4',
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    // headerRight: () => (
    //   <CloseIcon size="4" color="white" onPress={handleSignOut} />
    // ),
  };

  // useEffect(() => {
  //   const getUser = async () => {
  //     const authenticatedUser = await AsyncStorage.getItem('user');
  //     console.log(authenticatedUser);
  //     authenticatedUser && setUser(authenticatedUser);
  //   };

  //   getUser();
  // }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* {!user ? ( */}
          {/* <> */}
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
          {/* </> */}
          {/* ) : ( */}
          {/* <> */}
          <Stack.Screen name="Home" component={Home} options={headerOptions} />

          <Stack.Screen
            name="AddPatient"
            component={AddPatient}
            options={{...headerOptions, title: 'Add Patient'}}
          />

          <Stack.Screen
            name="CreatePrescription"
            component={CreatePrescription}
            options={{...headerOptions, title: 'Create Prescription'}}
          />

          <Stack.Screen
            name="CreateReferral"
            component={CreateReferral}
            options={{...headerOptions, title: 'Create Referral'}}
          />

          <Stack.Screen
            name="ViewPatients"
            component={ViewPatients}
            options={{...headerOptions, title: 'View Patients'}}
          />
          {/* </> */}
          {/* )} */}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
