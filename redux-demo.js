const redux = require ('redux');


//Reducer function which will receive the action from components and change the state and will return back to subscription. 
const reduxReducer = (state = {counter:0}  , action) => {

    if (action.type === 'increment'){
        return {counter: state.counter+1}
    }
    if(action.type === 'decrement'){
        return {counter : state.counter- 1}
    }
    return {
        counter: state.counter+1
    };
};

//Redux Store , createStore() will create the store and the reducer function will be added as parameter to let store know about the reducer 
const store = redux.createStore(reduxReducer);

//Creationg a function for subscribe function which will get the latest state from the store 
const counterSubscriber = () => {
   const latestState=  store.getState();
   console.log(latestState);
};

//subsribe function which will give new data to the components. and will change state 
store.subscribe(counterSubscriber);

//Dispatch actions from inside the components for reducer to know when to change state 
store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});
