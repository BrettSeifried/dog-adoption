import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Views/HomeDetail';
import DogDetail from './Views/DogDetail';
import Header from './component/Header';
// import DogForm from './component/DogForm';
import DogEdit from './Views/DogEdit';
import DogCreate from './Views/DogAdmin';

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dogs/admin" component={DogCreate} />
          <Route exact path="/dogs/:id/edit" component={DogEdit} />
          <Route exact path="/dogs/:id" component={DogDetail} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
