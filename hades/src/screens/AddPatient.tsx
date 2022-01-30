import AsyncStorage from '@react-native-community/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, Input, ScrollView, VStack} from 'native-base';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {addPatient, signIn} from '../api';

const AddPatient = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Welcome'>) => {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [EGN, setEGN] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [birthDate, setBirthDate] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [gender, setGender] = useState<string>('');

  const handleAddPatient = async () => {
    const user = await AsyncStorage.getItem('user');
    console.log(user);
    try {
      await addPatient({
        firstName,
        lastName,
        egn: EGN,
        address,
        phone,
        birthDate,
        age,
        genderType: gender,
        additionalInfo: '',
        doctorUser: 'wizzy',
      });

      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <VStack
        flex={1}
        space={6}
        padding={8}
        alignItems={'center'}
        justifyContent={'center'}
        background={'coolGray.900'}>
        <Heading color="white" size={'2xl'}>
          Add Patient
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
          placeholder="EGN"
          type="number"
          keyboardType="number-pad"
          defaultValue={EGN}
          onChangeText={input => setEGN(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Address"
          defaultValue={address}
          onChangeText={input => setAddress(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          type="number"
          keyboardType="phone-pad"
          placeholder="Phone"
          defaultValue={phone}
          onChangeText={input => setPhone(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Birth Date"
          defaultValue={birthDate}
          onChangeText={input => setBirthDate(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Age"
          type="number"
          keyboardType="number-pad"
          defaultValue={age}
          onChangeText={input => setAge(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Gender"
          defaultValue={gender}
          onChangeText={input => setGender(input)}
        />

        <Button width={'1/2'} borderRadius={'full'} onPress={handleAddPatient}>
          Sign In
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default AddPatient;
