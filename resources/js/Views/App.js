import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {ModeProvider} from '../context/mode-context';

import Dashboard from "./Dashboard";
import Create from "./Create";
import NavBar from "../components/NavBar";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <ModeProvider>
                    <NavBar/>
                    <Switch>
                        <Route exact path='/' component={Dashboard}/>
                        <Route exact path='/widgets/create/:position_id' component={Create}/>
                    </Switch>
                </ModeProvider>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
