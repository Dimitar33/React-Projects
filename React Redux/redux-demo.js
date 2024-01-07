const redux = require('redux');

function counterReduser(state = {counter: 0}, action){

    return {
           
        counter: state.counter + 1
    };
}

const store = redux.createStore(counterReduser);

function counterSub(){

    const latestState = store.getState();
    console.log(latestState);
}

store.subscribe(counterSub);

store.dispatch({type: 'increment'});