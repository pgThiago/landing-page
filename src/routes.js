import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import Home from './pages/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>                
            </Switch>
        </BrowserRouter>
    )
}
