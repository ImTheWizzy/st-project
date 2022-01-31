import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, HStack, Input, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {signUp} from '../api';

const SignUp = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Welcome'>) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = async () => {
    try {
      await signUp({firstName, lastName, username, password});

      navigation.navigate('Welcome');
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
        Register
      </Heading>

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="First Name"
        defaultValue={firstName}
        onChangeText={input => setFirstName(input)}
      />

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Last Name"
        defaultValue={lastName}
        onChangeText={input => setLastName(input)}
      />

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

      <Button width={'1/2'} borderRadius={'full'} onPress={handleSignUp}>
        Register
      </Button>
    </VStack>
  );
};

export default SignUp;
