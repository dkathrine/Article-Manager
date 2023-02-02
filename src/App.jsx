import "./App.css";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { About, Contact, Home, Article, Form, SuccessPage } from "./pages/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/articles/:id">
            <Article />
          </Route>

          <Route path="/form">
            <Form />
          </Route>

          <Route path="/success">
            <SuccessPage />
          </Route>

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
