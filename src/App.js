
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
// import { Router, Route,Switch} 
// from 'react-router-dom';
import Home from './components/Home';
import Editmember from "./components/Editmember"


function App() {
  return (
    <div className="App">
      <Home prop={Home.users}/>
      {/* <Editmember/> */}
      {/* <Router>
      <Switch>
      
      <Route exact path='/' component={Home}/>
      <Route exact path='Editmember/:id' component={Editmember}/> 
   
    </Switch>
    </Router> */}
    </div>
  );
}

export default App;
