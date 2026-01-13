import { createSlice } from "@reduxjs/toolkit";

     const initialState={
        userInfo:localStorage.getItem('userInfo')
        ?JSON.parse(localStorage.getItem('userInfo'))
        :null
    };
     const authSlice=createSlice({
     name:"auth",
     initialState,
     reducers:{
        setCredentials:(state,action) =>{
            state.userInfo=action.payload;
             localStorage.setItem("user", JSON.stringify(action.payload));  
        },
        removeCredentials:(state,action) =>{
            startSession.userInfo=action.payload;
            localStorage.removeItem("user");
        },   
    },
    });

export const {setCredentials,removeCredentials}=authSlice.actions;
export default authSlice.reducer;
