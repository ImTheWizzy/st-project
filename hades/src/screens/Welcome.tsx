import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, HStack, VStack} from 'native-base';
import React from 'react';
import {RootStackParamList} from '../../App';

const Welcome = ({
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
        Hades
      </Heading>

      <HStack space={4}>
        <Button
          flex={1}
          variant={'outline'}
          borderColor={'white'}
          borderRadius={'full'}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Register
        </Button>

        <Button
          flex={1}
          borderRadius={'full'}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          Sign In
        </Button>
      </HStack>
    </VStack>
  );
};

export default Welcome;
