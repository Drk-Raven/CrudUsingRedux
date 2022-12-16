import { View, Text,StyleSheet,Animated,Easing,ImageBackground } from 'react-native'
import React,{useRef,useEffect} from 'react'
import {INPUT_RANGE_START,INPUT_RANGE_END,OUTPUT_RANGE_START,OUTPUT_RANGE_END,ANIMATION_DURATION,ANIMATION_TO_VALUE} from '../util/utils'
import backgroundImage from '../Images/cloud.jpg'
import Login from './login'

const AnimatedBackground = (navigation) => {
    const initialValue = 0;
    const translateValue = useRef(new Animated.Value(initialValue)).current;
  
    useEffect(() => {
      const translate = () => {
        console.log("rs")
        translateValue.setValue(initialValue);
        Animated.timing(translateValue, {
          toValue: ANIMATION_TO_VALUE,
          duration: ANIMATION_DURATION,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
      };
  
      translate();
    }, [translateValue]);
  
    const translateAnimation = translateValue.interpolate({
      inputRange: [INPUT_RANGE_START, INPUT_RANGE_END],
      outputRange: [OUTPUT_RANGE_START, OUTPUT_RANGE_END],
    });
  
    const AnimetedImage = Animated.createAnimatedComponent(ImageBackground);
  return (
    <>
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
            source={backgroundImage} />
            <Login />
        </>
                
  )
}
const styles = StyleSheet.create({
    background:{
        position:'absolute',
        top:0,
        height:1200,
        width:1200,
        transform:[
            {translateX:0},
            {translateY:0}
        ]

    }
})
export default AnimatedBackground