import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Layout from './components/organisms/Layout/Layout';
import Index from './components/templates/Index/Index';
import Products from './components/templates/Products/Products';
import Directory from './components/templates/Directory/Directory';
import Orders from './components/templates/Orders/Orders';
import Reports from './components/templates/Reports/Reports';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/index/" component={ Index } />
          <Route path="/orders/" component={ Orders } />
          <Route path="/products/" component={ Products } />
          <Route path="/directory/" component={ Directory } />
          <Route path="/reports/" component={ Reports } />
          <Redirect to="/index/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
