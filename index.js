import { createStore } from 'redux';

const reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

//step 1: create it
const store = createStore(reducer);

//step 2: get the state in the store
const render = () => {
    document.body.innerText = store.getState();
};

//step 3: change the state in the store
document.addEventListener('click', () => {
    store.dispatch({type: 'UP'});
});

//step 4: subscribe to changes and re-render the state
store.subscribe(render);

render();
