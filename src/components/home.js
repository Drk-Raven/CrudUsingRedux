import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserSlice} from '../redux/slice/user';
import {addUserSlice,editUserSlice} from '../redux/slice/users';
import { nanoid } from '@reduxjs/toolkit';

const Home = ({navigation}) => {
  // const initialState = {
  //   id: 1,
  //   name: '',
  //   email: '',
  //   password: '',
  // };
  // const [state, setState] = useState(initialState);
  const state = useSelector(state => state.user);
  const dispatch = useDispatch();

  console.log('state=---', state);

  const handleSubmit = () => {
    state.id === 0 ? dispatch(addUserSlice({...state,id:nanoid(8)})) : dispatch(editUserSlice(state));
    dispatch(
      setUserSlice({
        id: 0,
        name: '',
        email: '',
        password: '',
      }),
    );

    navigation.navigate('Details');
  };
  const isAllValuePresent = state.name && state.email && state.password;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.wholeContainer}>
        <View style={styles.wholeContainer}>
          <View style={styles.container}>
            <TextInput
              style={styles.textInputField}
              placeholder="Enter Name"
              placeholderTextColor="gray"
              onChangeText={text => {
                dispatch(setUserSlice({...state, name: text}));
              }}
              value = {state.name}
            />
            <TextInput
              style={styles.textInputField}
              placeholder="Enter email"
              placeholderTextColor="gray"
              onChangeText={text => {
                dispatch(setUserSlice({...state, email: text}));
              }}
              textContentType={'emailAddress'}
                value = {state.email}
            />
            <TextInput
              style={styles.textInputField}
              secureTextEntry
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                dispatch(setUserSlice({...state, password: text}));
              }}
                value = {state.password}
            />
            <TouchableOpacity
              style={styles.btnStyle}
              onPress={handleSubmit}
              disabled={!isAllValuePresent}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: '#0e0b26',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputField: {
    borderWidth: 1,
    width: 250,
    height: 50,
    margin: 10,
    backgroundColor: 'white',
    color: 'black',
    padding: 10,
  },
  btnStyle: {
    width: 100,
    height: 40,
    backgroundColor: '#69e081',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
  },
  btnText: {
    color: 'black',
  },
});

export default Home;
