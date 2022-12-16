import {StyleSheet} from 'react-native';
import {
  primaryColor,
  textPrimary,
  btnPrimary,
  whiteColor,
} from '../styles/misc/colors';

export const styles = StyleSheet.create({
  background:{
    position:'absolute',
    height:1200,
    width:1200,
    opacity:0.2,
    top:0,
    transform:[
      {translateX:0},
      {translateY:0}
    ]

  },
  flexRowEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnStyleYellow: {
    width: 100,
    height: 40,
    backgroundColor: btnPrimary,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fcba03',
    
  },
  btnStyleTrans: {
    width: 100,
    height: 40,
    backgroundColor: 'rgba(218, 240, 247, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 20,
    
  },
  textStyle: {
    color: textPrimary,
    fontSize: 14,
    padding: 5,
  },
  heading: {
    alignItems: 'center',
    justifyContent:'center',
  },
  headerText: {
    color: textPrimary,
    fontSize: 40,
    fontWeight: 'bold',
  },
  textInputHeader: {
    color: textPrimary,
    marginVertical: 15,
    fontWeight:'bold',
    marginLeft:15
  },
  textInput: {
    backgroundColor: 'white',
    width: '100%',
    height: '12%',
    paddingLeft: 20,
    color: textPrimary,
    borderRadius: 30,
    borderColor: textPrimary,
  },
  yellowBackground: {
    backgroundColor: btnPrimary,
    width: '65%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,

    // marginLeft: '17%',
  },
  signUpTransBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
    // marginLeft: '15%',
    height: '100%',
    borderRadius: 30,
    borderWidth: 4,
    borderColor: textPrimary,
    marginTop:'-15%'
  },
  textStyleBold:{
    color: textPrimary,
    fontSize: 14,
    padding: 5,
    fontWeight:'bold'
  }
});
