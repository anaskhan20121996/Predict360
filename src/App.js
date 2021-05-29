import './component/App.css';
import MyContest from './component/MyContest'
import Home from './component/Home'
import { Switch,Route } from 'react-router-dom'




function App() {
  return (
    <>
 <Switch>
  <Route exact path="/" component={Home}/>
  <Route path="/mycontest" component={MyContest}/>
  </Switch>
  </>
  );
}

export default App;
