import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, Input, ScrollView, VStack} from 'native-base';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {createPrescription} from '../api';
import emailjs from 'emailjs-com';
import AsyncStorage from '@react-native-community/async-storage';

const CreatePrescription = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreatePrescription'>) => {
  const [medicine, setMedicine] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [prescriptionNumber, setPrescriptionNumber] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const sendEmail = () => {
    emailjs.send(
      'gmail',
      'template_u80w09h',
      {
        firstName,
        lastName,
        medicine,
        comment,
        uniquePrescriptionNumber: prescriptionNumber,
        date,
        email,
      },
      'user_Ggex7Dj28IYlVlg2dcjn2',
    );
  };

  const handleCreatePrescription = async () => {
    const user = await AsyncStorage.getItem('user');

    try {
      await createPrescription({
        medicine,
        comment,
        date,
        uniquePrescriptionNumber: prescriptionNumber,
        firstName,
        lastName,
        doctorUser: user || '',
      });

      sendEmail();

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
          Create Prescription
        </Heading>

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Medicine"
          defaultValue={medicine}
          onChangeText={input => setMedicine(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Comment"
          defaultValue={comment}
          onChangeText={input => setComment(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Date"
          defaultValue={date}
          onChangeText={input => setDate(input)}
        />

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Prescription Number"
          defaultValue={prescriptionNumber}
          onChangeText={input => setPrescriptionNumber(input)}
        />

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
          placeholder="Email"
          defaultValue={email}
          type="email"
          keyboardType="email-address"
          onChangeText={input => setEmail(input)}
        />

        <Button
          width={'full'}
          borderRadius={'full'}
          onPress={handleCreatePrescription}>
          Create Prescription
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default CreatePrescription;
