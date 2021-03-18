import {Switch} from 'react-router';
import {Route} from 'react-router';
import MainPage from './components/mainPage/MainPage';
import OverviewPage from './components/mainPage/overviewPage/OverviewPage';

function App() {
    return (
        <>
            <Switch>
                <Route exact path={"/"} render={() => <MainPage/>}/>
                <Route exact path={"/employers/:name?/"} render={() => <OverviewPage/>}/>
                <Route path={'*'} render={() => <div>404 NOT FOUND</div>}/>
            </Switch>
        </>
    );
}

export default App;
