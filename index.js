import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';

const reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

class Basement extends React.Component {
    render() {
        const store = this.props.store;
        const state = store.getState();
        return (
            <div>basement ... {state}</div>
        );
    }
}
class MiddleOne extends React.Component {
    render() {
        const store = this.props.store;
        return (
            <div>middle and <Basement store={store}/></div>
        );
    }
}
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
            <div>{state} <MiddleOne store={store} /><button onClick={() => { store.dispatch({type: 'UP'}); }}>up</button></div>
        );
    }
}

render((
    <TopLevel store={createStore(reducer)}/>
), document.getElementById('container'));
