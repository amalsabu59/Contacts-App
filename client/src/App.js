import Messages from './components/Messages';
import Contacts from './components/Contacts';
import Timeline from './components/Timeline';
import Navbar from './components/Navbar';

import Details from './components/Details';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Route>
          <Navbar />
        </Route>
        <Route exact path="/" >
          <Contacts />
        </Route>
        <Route path="/details/:id" >
          <Details />
        </Route>
        <Route path="/message/:num" >
          <Messages />

        </Route>
        <Route path="/timeline" >
          <Timeline />
        </Route>

      </Router>
    </>


  )
}

export default App;
