import AsyncStorage from '@react-native-community/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, Input, VStack} from 'native-base';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {signIn} from '../api';

const SignIn = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Welcome'>) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignIn = async () => {
    try {
      const response = await signIn({username, password});

      console.log(response);

      await AsyncStorage.setItem('user', response.userAuth);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack
      flex={1}
      space={6}
      padding={8}
      alignItems={'center'}
      justifyContent={'center'}
      background={'coolGray.900'}>
      <Heading color="white" size={'2xl'}>
        Sign In
      </Heading>

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Username"
        defaultValue={username}
        onChangeText={input => setUsername(input)}
      />

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Password"
        type="password"
        defaultValue={password}
        onChangeText={input => setPassword(input)}
      />

      <Button width={'1/2'} borderRadius={'full'} onPress={handleSignIn}>
        Sign In
      </Button>
    </VStack>
  );
};

export default SignIn;
