import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import get from 'lodash/get';
import { DELETE_USER_BY_ID, GET_USERS, UPDATE_USER_BY_ID } from '../redux/sagas/types';

const Details = ({navigation}) => {
  const data = useSelector(state => state.users);
  const dispatch = useDispatch(); 
  React.useEffect(()=>dispatch({type:getU})) 

  const RenderItem = (user, name) => {
    const userId = get(user,'id',null)
    
    const userName = get(user,'name',null)
    const userEmail = get(user,'email',null)
    const dataToShow = (name === 'Name')?userName:userEmail
    const isEdit = (name === "Edit")

    return (
      <>{!isEdit &&(
        <View style={styles.renderStyle}>
        <Text numberOfLines={1} style={{color: 'black'}}>
          {dataToShow}
        </Text>
      </View>
      )
      }
      {isEdit && (
        <View style={styles.renderStyle}>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => editUser(user)}>
          <Text style={{color: 'black'}}>edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.delStyle}
          onPress={() => delUser(userId)}>
          <Text style={{color: 'white'}}>delete</Text>
        </TouchableOpacity>
      </View>

      )}
      </>
    );
  };

  const editUser = userData => {
    // dispatch(setUserSlice(userData));
    dispatch({type:UPDATE_USER_BY_ID,user:userData})
    navigation.navigate('Home');
  };

  const delUser = userId => {
    dispatch({type:DELETE_USER_BY_ID,id:userId})
  };

  const createUser = () => {
    navigation.navigate('Home');
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
      {data.map((item, _index) => {
        return (
          <View style={styles.title}>
            <View style={styles.content}>{RenderItem(item, 'Name')}</View>
            <View style={styles.content}>{RenderItem(item, 'Email')}</View>
            <View style={styles.content}>{RenderItem(item, 'Edit')}</View>
          </View>
        );
      })}
      <View style={styles.container}>
        <TouchableOpacity style={styles.container} onPress={createUser}>
          <Text style={{color: 'black', fontSize: 15}}>CREATE</Text>
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
  container: {
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    height: 40,
    backgroundColor: '#94b8f2',
    borderRadius: 20,
  },
});

export default Details;
