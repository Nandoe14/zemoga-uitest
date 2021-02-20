import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { HomePage } from '../components/home/HomePage';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    {/* <Route exact path="/o" component={} />
                    <Route exact path="/oo" component={} /> */}

                    <Redirect to="/" />
                </Switch>
            </div >
        </Router >
    )
}
