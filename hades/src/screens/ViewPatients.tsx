import AsyncStorage from '@react-native-community/async-storage';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  Box,
  CloseIcon,
  HStack,
  IconButton,
  Input,
  SearchIcon,
  Text,
  VStack,
} from 'native-base';
import React, {useEffect, useState} from 'react';
import {RootStackParamList} from '../../App';
import {deletePatient, getPatients} from '../api';

interface IPatient {
  id: string;
  firstName: string;
  lastName: string;
  egn: string;
  phone: string;
  address: string;
  birthDate: string;
  age: string;
  gender: {id: string; genderType: string};
  additionalInfo: string;
  doctor: {};
}

const ViewPatients = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'ViewPatients'>) => {
  const [search, setSearch] = useState<string>('');
  const [patients, setPatients] = useState<IPatient[]>([]);
  const [filteredPatients, setFilteredPatients] = useState<IPatient[]>([]);

  const fetchPatients = async () => {
    const user = await AsyncStorage.getItem('user');

    if (user) {
      const response = await getPatients(user);

      setPatients(response);
      setFilteredPatients(response);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const filterResults = patients.filter(patient => {
      const fullName = patient.firstName + ' ' + patient.lastName;
      return fullName.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredPatients(filterResults);
  }, [search]);

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
      justifyContent={'flex-start'}
      background={'coolGray.900'}>
      <Input
        width={'3/4'}
        paddingX={4}
        marginBottom={4}
        fontSize={'sm'}
        color={'lightText'}
        borderRadius={'full'}
        placeholder="Search"
        defaultValue={search}
        onChangeText={input => setSearch(input)}
        InputLeftElement={<SearchIcon size="4" color="white" marginLeft={4} />}
      />

      {filteredPatients.length ? (
        filteredPatients.map(patient => (
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
              size="4"
              color="red.500"
              onPress={() => handleDeletePatient(patient)}
            />
          </HStack>
        ))
      ) : (
        <Text color="white">There are no patients matching your search.</Text>
      )}
    </VStack>
  );
};

export default ViewPatients;
