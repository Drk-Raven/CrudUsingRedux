import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setUserSlice} from '../redux/slice/user';
import {deleteUserSlice} from '../redux/slice/users';
import get from 'lodash/get';

const Details = ({navigation}) => {
  const data = useSelector(state => state.users);
  const dispatch = useDispatch();

  const RenderItem = (data, name) => {
    const userName = get(data, 'data.name', null);
    return (
      <View style={styles.renderStyle}>
        <Text numberOfLines={1} style={{color: 'black'}}>
          {userName}{' '}
        </Text>
      </View>
    );
  };
  const RenderEmail = (data, name) => {
    const userEmail = get(data, 'data.email', null);
    return (
      <View style={styles.renderStyle}>
        <Text numberOfLines={1} style={{color: 'black'}}>
          {userEmail}{' '}
        </Text>
      </View>
    );
  };

  const editUser = userData => {
    dispatch(setUserSlice(userData));
    navigation.navigate('Home');
  };

  const delUser = userId => {
    return dispatch(deleteUserSlice(userId));
  };

  const createUser = () => {
    console.log("Inside")
    navigation.navigate('Home')
  }

  const RenderEdit = data => {
    const userId = get(data, 'data.id', null);
    const userData = get(data, 'data', null);

    return (
      <View style={styles.renderStyle}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => editUser(userData)}>
          <Text style={{color: 'black'}}>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delStyle}
          onPress={() => delUser(userId)}>
          <Text style={{color: 'white'}}>delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.title}>
        <View style={styles.heading}>
          <Text style={styles.textStyle}>Name</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.textStyle}>Email</Text>
        </View>
        <View style={styles.heading}>
          <Text style={styles.textStyle}>Options</Text>
        </View>
      </View>
      <View style={styles.title}>
        <View style={styles.content}>
          {data.map((item, _index) => (
            <RenderItem data={item} name={true} />
          ))}
        </View>
        <View style={styles.content}>
          {data.map((item, _index) => (
            <RenderEmail data={item} name={false} />
          ))}
        </View>
        <View style={styles.content}>
          {data.map((item, _index) => (
            <RenderEdit data={item} />
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPress={createUser} >
          <Text style={{color:'black',fontSize:15}} >CREATE</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0e0b26',
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#94b8f2',
  },
  heading: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRightWidth: 1,
    height: 50,
  },
  textStyle: {
    padding: 10,
    color: 'black',
  },
  content: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#d5d1ff',
    backgroundColor: '#dcd9fa',
    borderRightWidth: 1,
  },
  renderStyle: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnStyle: {
    backgroundColor: '#69e081',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delStyle: {
    backgroundColor: '#e01b2f',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  container:{
    color:'white',
    alignItems:'center',
    justifyContent:'center',
    margin:20,
    height:40,
    backgroundColor:'#94b8f2',
    borderRadius:20,

  }
});

export default Details;
