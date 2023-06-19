// import {createStore} from 'redux';

import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({

    name: 'counter',
    initialState: { value: 0, showCounter: true },
    reducers: {
        increment(state) {
            state.value++;
        },
        decrement(state) {
            state.value--;
        },
        increase(state, action) {
            state.value = state.value + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'Auth',
    initialState: { isAuthenticated: false },
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// For single Reducer
// const store = configureStore({
//     reducer: counterSlice.reducer
//  });

//For Multiple Reducers
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;