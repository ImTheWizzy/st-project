import AsyncStorage from '@react-native-community/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, Heading, Input, ScrollView, VStack} from 'native-base';
import React, {useState} from 'react';
import {RootStackParamList} from '../../App';
import {createReferral} from '../api';
import emailjs from 'emailjs-com';

const CreateReferral = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'CreateReferral'>) => {
  const [doctorType, setDoctorType] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [referralNumber, setReferralNumber] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  const sendEmail = (doctorUser: string) => {
    emailjs.send(
      'gmail',
      'template_jbr2r6z',
      {
        doctorType,
        comment,
        date,
        uniqueReferralNumber: referralNumber,
        firstName,
        lastName,
        doctorUser,
        email,
      },
      'user_Ggex7Dj28IYlVlg2dcjn2',
    );
  };

  const handleCreateReferral = async () => {
    const user = await AsyncStorage.getItem('user');

    try {
      await createReferral({
        doctorType,
        comment,
        date,
        uniqueReferralNumber: referralNumber,
        firstName,
        lastName,
        doctorUser: user || '',
      });

      sendEmail(user || '');

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
          Create Referral
        </Heading>

        <Input
          px={4}
          width={'full'}
          fontSize={'sm'}
          color={'lightText'}
          borderRadius={'full'}
          placeholder="Doctor Type"
          defaultValue={doctorType}
          onChangeText={input => setDoctorType(input)}
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
          placeholder="Referral Number"
          defaultValue={referralNumber}
          onChangeText={input => setReferralNumber(input)}
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
          width={'1/2'}
          borderRadius={'full'}
          onPress={handleCreateReferral}>
          Create Referral
        </Button>
      </VStack>
    </ScrollView>
  );
};

export default CreateReferral;
