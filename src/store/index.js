import {createStore} from 'redux'

const reducerFun = (state = {counter:0}, action) => {

    if (action.type === 'increment') {

        return {
            counter: state.counter + 1
        }
    };
    if (action.type === 'decrement') {

        return {
            counter: state.counter - 1
        }
    };
    if(action.type=== 'increase'){

        return {
            counter: state.counter + action.value
        }
    }
    return state;
};

const store = createStore(reducerFun);
 
export default store;