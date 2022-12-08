import {createSlice} from '@reduxjs/toolkit';

const user = createSlice({
  name: 'user',
  initialState: {
    id: 0,
    name: '',
    email: '',
    password: '',
  },
  reducers: {
    setUserSlice: (state, action) => {
      console.log('SetUser---State',state)
      console.log('SetUser---Action',action)
      state = action.payload;
      return state;
    },
  },
});

export const {setUserSlice} = user.actions;

export default user.reducer;
