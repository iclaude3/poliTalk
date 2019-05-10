import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import Reps from './pages/representatives.js';
import Bills from './pages/bills.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <Route name="representatives" exact path="/representatives" component={Reps} />
          <Route name="bills" exact path="/bills" component={Bills} />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;