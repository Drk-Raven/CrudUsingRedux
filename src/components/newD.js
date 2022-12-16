import { View, Text,StyleSheet,Animated,Easing,ImageBackground,TouchableOpacity,
    TextInput, } from 'react-native'
import React,{useRef,useEffect,useState} from 'react'
import {INPUT_RANGE_START,INPUT_RANGE_END,OUTPUT_RANGE_START,OUTPUT_RANGE_END,ANIMATION_DURATION,ANIMATION_TO_VALUE} from '../util/utils'
import backgroundImage from '../Images/cloud.jpg'
import {styles} from './loginStyles';
import {Input} from '@rneui/themed';

const AnimatedBackground = (navigation) => {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;
    const InitialState = {
        btnColor: true,
        name: '',
        email: '',
        password: '',
      };
      const [state, setState] = useState(InitialState);
    
      const onSignUp = () => {
        console.log('SignUp', state.btnColor);
        setState({...state, btnColor: true});
      };
      const onSignIn = () => {
        console.log('SignIn', state.btnColor);
        setState({...state, btnColor: false});
      };
    
      const reg = "Helllo jms Bnd"
      const checIf  = /jms/
      console.log(reg.match(checIf))
  
    useEffect(() => {
      const translate = () => {
        console.log("r")
        translateValue.setValue(initialValue);
        Animated.timing(translateValue, {
          toValue: ANIMATION_TO_VALUE,
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      }
      translate()
        }, []);
  
    const translateAnimation = translateValue.interpolate({
      inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
      outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });
  
    const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);
  return (
    <AnimetedImage 
            resizeMode="repeat" 
            style={[styles.background,{
                transform: [
                    {
                      translateX: translateAnimation,
                    },
                    {
                      translateY: translateAnimation,
                    },
                  ],
            }]}
            source={backgroundImage} >
<View>
      <View style={styles.flexRowEnd}>
        <TouchableOpacity
          style={state.btnColor ? styles.btnStyleYellow : styles.btnStyleTrans}
          onPress={onSignUp}>
          <Text style={styles.textStyle}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={!state.btnColor ? styles.btnStyleYellow : styles.btnStyleTrans}
          onPress={onSignIn}>
          <Text style={styles.textStyle}>SignIn</Text>
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
      </View>                </AnimetedImage>
                
  )
}
// const styles = StyleSheet.create({
//     background:{
//         position:'absolute',
//         top:0,
//         height:1200,
//         width:1200,
//         transform:[
//             {translateX:0},
//             {translateY:0}
//         ]

//     }
// })
export default AnimatedBackground