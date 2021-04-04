import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import DaCasa from './pages/DaCasa';
import DaCasaDetalhes from './pages/DaCasaDetalhes';
import Doces from './pages/Doces';
import DocesDetalhes from './pages/DocesDetalhes';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/doces" component={Doces} />
      <Route exact path="/daCasa" component={DaCasa} />
      <Route exact path="/doces/:id" component={DocesDetalhes} />
      <Route exact path="/daCasa/:id" component={DaCasaDetalhes} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
