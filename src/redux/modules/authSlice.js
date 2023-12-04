// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     id: '',
//     password:'',
//     nickname: '',
//     login: false,
// };

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             return {...state, ...action.payload}
//         },
//         logout: (state, action) => {
//             setCookie('token', undefined);
//             alert('로그아웃되었습니다');
//             return {...initialState};
//         },
//    },

//    extraReducers: (builder) => {
//     builder.addCase(signUpAsync.fulfilled, (state, action) => {
//         alert('회원가입에 성공하셨습니다');
//         setCookie('token', action.payload.token);
//         return { ...state, nickname: action.payload.nickname, login:true};
//     });
//    }
// });


// export const { login, logout, setCookie, signUpAsync } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload; // 유저 정보를 받아와서 저장할 수 있음
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;