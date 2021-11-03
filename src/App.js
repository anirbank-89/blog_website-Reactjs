import { Box  } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// component imports
import Home from './components/home/Home';
import NavBar from './components/NavBar';
import CreateNew from "./components/post/CreateNew";
import DetailView from './components/post/DetailView';
import Update from "./components/post/Update";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={DetailView} />
          <Route exact path="/create-blog" component={CreateNew} />
          <Route exact path="/update-blog" component={Update} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;