import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/product/:productId" exact component={ProductDetail} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
