import { Box  } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// component imports
import Home from './components/home/Home';
import NavBar from './components/NavBar';
import DetailView from './components/post/DetailView';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Box style={{ marginTop: 64 }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={DetailView} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;