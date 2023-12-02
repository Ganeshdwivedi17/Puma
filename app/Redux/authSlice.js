import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:'auth',
    initialState:{
        isLogedIn: false,
        user:null
    },
    reducers:{
        UserLogin:(state,action)=>{
            state.isLogedIn = true;
            state.user = {
                email:action.payload.email,
                password:action.payload.password,
            }
        },
        UserLogout:(state)=>{
            state.isLogedIn = false;
            state.user = null;
        }
    }
})

export const {UserLogin, UserLogout} = authSlice.actions;
export default authSlice.reducer;