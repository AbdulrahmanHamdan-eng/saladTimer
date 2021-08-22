
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import carrot from './img/carrot.png';
import cucumber from './img/cucumber.png';
import eggplant from './img/eggplant.png';
import lettuce from './img/lettuce.png';
import onion from './img/onion.png';
import pepper from './img/pepper.png';
import pumpkin from './img/pumpkin.png';
import radish from './img/radish.png';
import tomato from './img/tomato.png';
import Eggplant from './Eggplant';
import Cucumber from './Cucumber';
import Lettuce from './Lettuce';
import Onion from './Onion';
import Pepper from './Pepper';
import Pumpkin from './Pumpkin';
import Radish from './Radish';
import Tomato from './Tomato';
import Carrot from './Carrot';
import './App.css';
function App() {
  return (
    <Router>
      <h1 style={ { textAlign: "center" } }>Salad Timer</h1>
      <div className="style">
        <Link to="/carrot" className="link" style={ { color: " #F98F43", border: "1px solid #F98F43" } } >
          <img src={ carrot } width="200px" />
          <h1>5</h1>
        </Link>
        <Link to="/eggplant" className="link" style={ { color: "#C28CCB", border: "1px solid #C28CCB" } }>
          <img src={ eggplant } width="200px" />
          <h1>10</h1>
        </Link>
        <Link to="/cucumber" className="link" style={ { color: "#38761C", border: "1px solid #38761C" } }>
          <img src={ cucumber } width="200px" />
          <h1>15</h1>
        </Link>
        <Link to="/radish" className="link" style={ { color: "#E70046", border: "1px solid #E70046" } }>
          <img src={ radish } width="200px" />
          <h1>20</h1>
        </Link>
        <Link to="/tomato" className="link" style={ { color: "#C82A00", border: "1px solid #C82A00" } }>
          <img src={ tomato } width="200px" />
          <h1>25</h1>
        </Link>
        <Link to="/onion" className="link" style={ { color: "#FFB493", border: "1px solid #FFB493" } }>
          <img src={ onion } width="200px" />
          <h1>30</h1>
        </Link>
        <Link to="/pepper" className="link" style={ { color: "#DE8204", border: "1px solid  #DE8204" } }>
          <img src={ pepper } width="200px" />
          <h1>40</h1>
        </Link>
        <Link to="/pumpkin" className="link" style={ { color: "#F77E39", border: "1px solid  #F77E39" } }>
          <img src={ pumpkin } width="200px" />
          <h1>50</h1>
        </Link>
        <Link to="/lettuce" className="link" style={ { color: "#96B60B", border: "1px solid #96B60B" } }>
          <img src={ lettuce } width="200px" />
          <h1>60</h1>
        </Link>
      </div>
      <Switch>
        <Route path="/carrot" >
          <Carrot />
        </Route>
        <Route path="/eggplant" component={ Eggplant } />
        <Route path="/cucumber" component={ Cucumber } />
        <Route path="/lettuce" component={ Lettuce } />
        <Route path="/onion" component={ Onion } />
        <Route path="/pepper" component={ Pepper } />
        <Route path="/pumpkin" component={ Pumpkin } />
        <Route path="/radish" component={ Radish } />
        <Route path="/tomato" exact component={ Tomato } />
      </Switch>
    </Router>

  );
}

export default App;
