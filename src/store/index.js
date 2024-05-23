import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name:'form',
  initialState:{
    name:'',
    title:''
  },
  reducers:{
    modifyName(state,action){
      state.name = action.payload;
    },
    modifyTitle(state,action){
      state.title = action.payload;
    }
  }
});


const store = configureStore({
  reducer:{
    form:formSlice.reducer
  }
});

export default store;