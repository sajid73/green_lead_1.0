import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Impact from "./pages/Impact/Impact";
import NotFound from "./pages/NotFound/NotFound";
import Team from "./pages/Team/Team";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{minHeight: '50vh'}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/team" component={Team} />
          <Route path="/impact" component={Impact} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
