import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom';
import Dashboard from "./Dashboard";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route exact path='/' component={Dashboard}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App/>, document.getElementById('app'));
}
