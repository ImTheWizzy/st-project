import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, HStack, Input, Text, View, VStack} from 'native-base';
import React from 'react';
import {RootStackParamList} from '../../App';

const SignUp = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Welcome'>) => {
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
      />

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Last Name"
      />

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Username"
      />

      <Input
        px={4}
        width={'full'}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Password"
        type="password"
      />

      <Button
        width={'1/2'}
        borderRadius={'full'}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        Register
      </Button>
    </VStack>
  );
};

export default SignUp;
