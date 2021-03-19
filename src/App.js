import { Switch, Route } from 'react-router';
import Components from '../src/components/index';

const App = () =>
    <>
        <Switch>
            <Route exact path={"/"} render={() => <Components.MainPage/>}/>
            <Route exact path={"/employers/:name?/"} render={() => <Components.OverviewPage/>}/>
            <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
        </Switch>
    </>

export default App;
