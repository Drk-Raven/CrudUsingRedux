import {View, Text} from 'react-native';
import React from 'react';
// import { useNavigation } from '@react-navigation/native'
import {BarChart} from 'react-native-gifted-charts';
const BarCharts = ({navigation, route}) => {
  // const navigation = useNavigation()
  // const item = navigation.getParams('item')
  // console.log("Item----",item)
  // const{item } =route.params
  // console.log('Item',item)
  const data = [
    {
      value: 230,
      label: 'Jan',
      frontColor: '#4ABFF4',
      sideColor: '#23A7F3',
      topColor: '#92e6f6',
    },
    {
      value: 180,
      label: 'Feb',
      frontColor: '#79C3DB',
      sideColor: '#68BCD7',
      topColor: '#9FD4E5',
    },
    {
      value: 195,
      label: 'Mar',
      frontColor: '#28B2B3',
      sideColor: '#0FAAAB',
      topColor: '#66C9C9',
    },
    {
      value: 250,
      label: 'Apr',
      frontColor: '#4ADDBA',
      sideColor: '#36D9B2',
      topColor: '#7DE7CE',
    },
    {
      value: 320,
      label: 'May',
      frontColor: '#91E3E3',
      sideColor: '#85E0E0',
      topColor: '#B0EAEB',
      topLabelComponent: ()=> {
        const name = false
        return(
          name&&<Text style={{color:'black',fontWeight:'bold'}} >S</Text>
        )
      }
    },
  ];
  const pieData = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 40, color: '#79D2DE', text: '30%'},
    {value: 20, color: '#ED6665', text: '26%'},
  ];

  return (
    <View style={{backgroundColor: '#DAF0F7', height: '100%', padding: 10,display:'flex',justifyContent:'center'}}>
        <Text style={{color:'black'}} >BarChart:</Text>
        <View style={{backgroundColor:'grey',padding:10,borderRadius:10,marginTop:10}} >
            <Text style={{padding:10}} >Population:</Text>
        <BarChart
        showFractionalValue
        showYAxisIndices
        hideRules
        noOfSections={4}
        maxValue={400}
        data={data}
        barWidth={30}
        sideWidth={20}
        isThreeD
        side="right"
      />
        </View>
    </View>
  );
};

export default BarCharts;
