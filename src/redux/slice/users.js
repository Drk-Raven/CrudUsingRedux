import {createSlice} from '@reduxjs/toolkit';

const users = createSlice({
  name: 'users',
  initialState: [
    {
      id: 0,
      name: '',
      email: '',
      password: '',
    },
  ],
  reducers: {
    getUsersSlice: (state, action) => {
      return state;
    },
    addUserSlice: (state, action) => {
       state.push(action.payload);
       return state
    },
    editUserSlice: (state, action) => {
      console.log('Edit')
        state = state.map(i=>i.id === action.payload.id?action.payload:i);
        return state
     },
     deleteUserSlice: (state, action) => {
      console.log("fe;")
        state = state.filter(i=>i.id !== action.payload)
        return state
     },
  },
});

export const {getUsersSlice,addUserSlice,editUserSlice,deleteUserSlice} = users.actions;

export default users.reducer;