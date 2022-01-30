import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, VStack} from 'native-base';
import React from 'react';
import {RootStackParamList} from '../../App';

const Home = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  return (
    <VStack
      flex={1}
      space={6}
      padding={8}
      alignItems={'center'}
      justifyContent={'center'}
      background={'coolGray.900'}>
      <Button
        width={'3/4'}
        borderRadius={'full'}
        onPress={() => {
          navigation.navigate('AddPatient');
        }}>
        Add Patient
      </Button>

      <Button
        width={'3/4'}
        variant={'outline'}
        borderColor={'white'}
        borderRadius={'full'}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create Prescription
      </Button>

      <Button
        width={'3/4'}
        variant={'outline'}
        borderColor={'white'}
        borderRadius={'full'}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create Medical Referral
      </Button>

      <Button
        width={'3/4'}
        variant={'ghost'}
        onPress={() => {
          navigation.navigate('ViewPatients');
        }}>
        View All Patients
      </Button>
    </VStack>
  );
};

export default Home;
