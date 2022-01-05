import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Views/HomeDetail';
import DogDetail from './Views/DogDetail';
import Header from './component/Header';
import DogForm from './Views/Admin';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dogs/admin" component={DogForm} />
          <Route path="/dogs/:id" component={DogDetail} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
