import AsyncStorage from '@react-native-community/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Box, CloseIcon, HStack, IconButton, Text, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../App';
import {deletePatient, getPatients} from '../api';

const ViewPatients = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'ViewPatients'>) => {
  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      const response = await getPatients(user);

      setPatients(response);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const handleDeletePatient = async (patient: any) => {
    // type any is bad but i literally cannot be bothered to make another type for a patient
    try {
      await deletePatient(patient.id);
      await fetchPatients();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack
      flex={1}
      space={4}
      padding={8}
      alignItems={'center'}
      justifyContent={'center'}
      background={'coolGray.900'}>
      {patients.map(patient => (
        <HStack
          key={patient.id}
          alignItems={'center'}
          justifyContent={'space-between'}
          borderRadius="full"
          background="blueGray.800"
          paddingX={4}
          paddingY={2}
          width={'3/4'}>
          <Text color="white">
            {patient.firstName} {patient.lastName}
          </Text>

          <CloseIcon
            color="red.500"
            size="4"
            onPress={() => handleDeletePatient(patient)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default ViewPatients;
