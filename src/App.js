import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import UserForm from "./Components/Form/UserForm";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Page from "./Components/Page/Page";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/login">
              <UserForm></UserForm>
              <Page></Page>
            </Route>
            <Route path="/">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
}

export default App;



