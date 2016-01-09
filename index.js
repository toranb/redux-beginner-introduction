import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const low = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});
const high = ((state=9, action) => {
    if(action.type === 'DOWN') {
        return state - 1;
    }
    return state;
});

class Basement extends React.Component {
    render() {
        const store = this.context.store;
        const high = store.getState().high;
        return (
            <div>basement ... {high} <button onClick={() => { store.dispatch({type: 'DOWN'}); }}>down</button></div>
        );
    }
}
Basement.contextTypes = {
    store: React.PropTypes.object
}
class MiddleOne extends React.Component {
    render() {
        return (
            <div>middle and <Basement /></div>
        );
    }
}
class TopLevel extends React.Component {
    componentDidMount() {
        const store = this.context.store;
        store.subscribe(() => {
            this.forceUpdate();
        });
    }
    render() {
        const store = this.context.store;
        const low = store.getState().low;
        return (
            <div>{low} <button onClick={() => { store.dispatch({type: 'UP'}); }}>up</button><MiddleOne /></div>
        );
    }
}
TopLevel.contextTypes = {
    store: React.PropTypes.object
}

render((
    <Provider store={createStore(combineReducers({low: low, high: high}))}>
      <TopLevel />
    </Provider>
), document.getElementById('container'));
