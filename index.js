import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

//step 1: create it
const store = createStore(reducer);

//step 2: get the state in the store (with render)
//step 3: change the state in the store (with onClick)
//step 4: subscribe to changes and forceUpdate (re-render)
class TopLevel extends React.Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
        });
    }
    render() {
        const state = store.getState();
        return (
            <div>{state} <button onClick={() => { store.dispatch({type: 'UP'}); }}>up</button></div>
        );
    }
}

render((
    <TopLevel />
), document.getElementById('container'));
