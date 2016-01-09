import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const reducer = ((state=0, action) => {
    if(action.type === 'UP') {
        return state + 1;
    }
    return state;
});

class Basement extends React.Component {
    render() {
        const store = this.context.store;
        const state = store.getState();
        return (
            <div>basement ... {state}</div>
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
        const state = store.getState();
        return (
            <div>{state} <MiddleOne /><button onClick={() => { store.dispatch({type: 'UP'}); }}>up</button></div>
        );
    }
}
TopLevel.contextTypes = {
    store: React.PropTypes.object
}

render((
    <Provider store={createStore(reducer)}>
      <TopLevel />
    </Provider>
), document.getElementById('container'));
