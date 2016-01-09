import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

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

const Basement = (props) => {
    const high = props.high;
    return (
        <div>basement ... {high} <button onClick={props.down}>down</button></div>
    );
}
const MiddleOne = () => {
    return (
        <div>middle and <XBasement /></div>
    );
}
const TopLevel = (props) => {
    const low = props.low;
    return (
        <div>{low} <button onClick={props.up}>up</button><MiddleOne /></div>
    );
}

const mapLowDispatchToProps = (dispatch) => {return {up: () => dispatch({type: 'UP'})}}
const mapHighDispatchToProps = (dispatch) => {return {down: () => dispatch({type: 'DOWN'})}}
const XBasement = connect(state => {return {high: state.high}}, mapHighDispatchToProps)(Basement);
const XTopLevel = connect(state => {return {low: state.low}}, mapLowDispatchToProps)(TopLevel);

render((
    <Provider store={createStore(combineReducers({low: low, high: high}))}>
      <XTopLevel />
    </Provider>
), document.getElementById('container'));
