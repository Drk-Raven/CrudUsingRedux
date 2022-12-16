import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './loginStyles';
import {Input} from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import {INPUT_RANGE_START,INPUT_RANGE_END,OUTPUT_RANGE_START,OUTPUT_RANGE_END,ANIMATION_DURATION,ANIMATION_TO_VALUE} from '../util/utils'
const Login = () => {
  const InitialState = {
    btnColor: true,
    name: '',
    email: '',
    password: '',
  };
  const [state, setState] = useState(InitialState);
  const navigation = useNavigation()

  const onSignUp = () => {
    console.log('SignUp', state.btnColor);
    setState({...state, btnColor: true});
  };
  const onChart = () => {
    navigation.navigate('BarChart',{item:'sheik'})
    // console.log('SignIn', state.btnColor);
    // setState({...state, btnColor: false});
  };

  return (
    <ScrollView style={{ display:'flex',padding:20}}>
      <View>
      <View style={styles.flexRowEnd}>
        <TouchableOpacity
          style={state.btnColor ? styles.btnStyleYellow : styles.btnStyleTrans}
          onPress={onSignUp}>
          <Text style={styles.textStyle}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!state.btnColor ? styles.btnStyleYellow : styles.btnStyleTrans}
          onPress={onChart}>
          <Text style={styles.textStyle}>BarChart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.heading}>
        <Text style={styles.headerText}>Sign Up</Text>
        <Text style={styles.textStyle}>
          To join the banana lovers community
        </Text>
      </View>
      <View style={{paddingHorizontal:15}}>
        <Text style={styles.textInputHeader}>Your name</Text>
        <Input
          inputContainerStyle={{borderBottomWidth: 0,}}
          containerStyle={[
            styles.textInput,
            state.name
              ? {borderWidth: 2}
              : {borderWidth: 1, borderColor: 'grey'},
          ]}
          placeholder="Name"
          onChangeText={text => setState({...state, name: text})}
        />
        <Text style={styles.textInputHeader}>E-mail</Text>
        <Input
          inputContainerStyle={{borderBottomWidth: 0}}
          containerStyle={[
            styles.textInput,
            state.email
              ? {borderWidth: 2}
              : {borderWidth: 1, borderColor: 'grey'},
          ]}
          placeholder="E-mail"
          onChangeText={text => setState({...state, email: text})}
        />
        <Text style={styles.textInputHeader}>Password</Text>
        <Input
          inputContainerStyle={{borderBottomWidth: 0}}
          containerStyle={[
            styles.textInput,
            state.password
              ? {borderWidth: 2}
              : {borderWidth: 1, borderColor: 'grey'},
          ]}
          onChangeText={text => setState({...state, password: text})}
          placeholder="password"
          secureTextEntry
        />
      </View>
      </View>
      <View>
      <View style={{height: 45,marginTop:-10}}>
        <View style={{height: '100%', width: '100%',justifyContent:'center',alignItems:'center'}}>
          <View style={styles.yellowBackground}>
            <Text style={styles.textStyle}></Text>
          </View>
          <TouchableOpacity style={styles.signUpTransBtn}>
            <Text style={styles.textStyleBold}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};

export default Login;
