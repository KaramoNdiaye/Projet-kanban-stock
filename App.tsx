import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Fournisseurs from './pages/Fournisseurs';
import Modeles from './pages/Modeles';
import Commandes from './pages/Commandes';
import Magasins from './pages/Magasins';
import Rapports from './pages/Rapports';
import LoginForm from './components/Auth/LoginForm';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/fournisseurs" component={Fournisseurs} />
          <Route path="/modeles" component={Modeles} />
          <Route path="/commandes" component={Commandes} />
          <Route path="/magasins" component={Magasins} />
          <Route path="/rapports" component={Rapports} />
          <Route path="/login" component={LoginForm} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;