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
import {addUserSlice, editUserSlice} from '../redux/slice/users';
import {nanoid} from '@reduxjs/toolkit';
import {CREATE_USERS, UPDATE_USER_BY_ID} from '../redux/sagas/types';

const Home = ({navigation}) => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleChange = prop => event => {
    dispatch(setUserSlice({...user, [prop]: event.target.value}));
  };
  const handleSubmit = () => {
    user.id === 0
      ? dispatch({type: CREATE_USERS, user: {...user, id: nanoid(8)}})
      : dispatch({type: UPDATE_USER_BY_ID, user});

    dispatch(
      setUserSlice({
        id: 0,
        name: '',
        email: '',
        password: '',
      }),
    );
    navigation.navigate('Details')
  };
  const isAllValuePresent = user.name && user.email && user.password;

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
                dispatch(setUserSlice({...user, name: text}));
              }}
              value={user.name}
            />
            <TextInput
              style={styles.textInputField}
              placeholder="Enter email"
              placeholderTextColor="gray"
              onChangeText={text => {
                dispatch(setUserSlice({...user, email: text}));
              }}
              textContentType={'emailAddress'}
              value={user.email}
            />
            <TextInput
              style={styles.textInputField}
              secureTextEntry
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                dispatch(setUserSlice({...user, password: text}));
              }}
              value={user.password}
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
