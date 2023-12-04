import lettersSlice from "redux/modules/lettersSlice";
import memberSlice from "redux/modules/memberSlice";
// import authSlice from "redux.modules/authSlice";
import { configureStore } from "@reduxjs/toolkit";

// const rootReducer = combineReducers({ letters, member });

// const store = createStore(rootReducer, devToolsEnhancer());

const store = configureStore({
    reducer: {
        lettersSlice,
        memberSlice,
        // authSlice,
    }
})

export default store;
