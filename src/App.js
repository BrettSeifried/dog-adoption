import './App.css';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Views/HomeDetail';
import DogDetail from './Views/DogDetail';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <header>
          <NavLink to="/">HOME</NavLink>
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/dogs/:id">
            <DogDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
