// /src/App.js
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { linechart, barchart,piechart, Electronics } from './page';
import { Navbar } from './navbar';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                {/* The corresponding component will show here if the current URL matches the path */}
                <Route path="/" exact component={linechart} />
                <Route path="/barchart" component={barchart} />
                <Route path="/piechart" component={piechart} />
                <Route path="/electronics" component={Electronics} />
            </div>
        );
    }
}

export default App;