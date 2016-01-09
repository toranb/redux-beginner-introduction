import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

class TopLevel extends React.Component {
    componentDidMount() {
        const store = this.props.store;
        store.subscribe(() => {
            this.forceUpdate();
        });
    }
    render() {
        const store = this.props.store;
        const state = store.getState();
        return (
            <div>{state} <button onClick={() => { store.dispatch({type: 'UP'}); }}>up</button></div>
        );
    }
}

render((
    <TopLevel store={createStore(reducer)}/>
), document.getElementById('container'));
