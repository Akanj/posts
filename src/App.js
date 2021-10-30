import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// Components
import PostView from './components/PostView';
import PostList from './components/PostList';
import NotFound from './components/NotFound';
// Styles
// import './App.css';

function App() {

  const viewShow = localStorage.getItem('viewNb');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/post/1">Post page</Link>
            </li>
            <li>
              <Link to="/">List</Link>
            </li>
            <li>
              {viewShow}</li>
          </ul>
        </nav>

        <Switch>
          <Route path="/post/:id" exact>
            <PostView />
          </Route>
          <Route path="/" exact>
            <PostList />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
