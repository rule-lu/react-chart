import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {LineDemochart,BarDemochart,PieDemochart} from './chart';

const styles = {
    marginTop: '10%'
};

const linechart = () => {
    return (
        <div style={styles}>
            <LineDemochart/>
        </div>
    );
};

const barchart = () => {
    return (
        <div style={styles}>
            <BarDemochart/>
        </div>
    );
};

const piechart = () => {
    return (
        <div style={styles}>
            <PieDemochart/>
        </div>
    );
};

const Electronics = () => {
    return (
        <div>
            <h1>Electronics</h1>
            <Switch>
                {/* The component will show here if the current URL matches the path */}
                <Route path="/electronics/mobile" component={Mobile}/>
                <Route path="/electronics/desktop" component={Desktop}/>
                <Route path="/electronics/laptop" component={Laptop}/>
            </Switch>
        </div>
    );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
    return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
    return <h3>Desktop PC</h3>;
};

const Laptop = () => {
    return <h3>Laptop</h3>;
};

export {linechart, barchart,piechart, Electronics, Mobile, Desktop, Laptop};