import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import { makeStyles } from '@material-ui/styles';
import AuthorizationForm from '../AuthorizationForm/AuthorizationForm';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import { projectStore } from '../../redux/reduxStorage';

const useStyles = makeStyles({
  app: {
      maxWidth: "600px",
      width: "100%",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: "4rem"
  }
});


function App() {
  const { app } = useStyles();
  
  return (
    <Router>
        <div className={app}>
          <Provider store={projectStore}>
            <Switch>
              <Route path="/" exact>
                <AuthorizationForm/>
              </Route>
              <Route path="/to-do">
                <PostAddForm/>
                <PostList/>
              </Route>
            </Switch>
          </Provider>
        </div>
    </Router>
  );
}

export default App;
