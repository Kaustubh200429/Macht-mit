import "./App.css";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";

import About from "./components/about/About";
import CourseHome from "./components/allcourses/CourseHome";
import Team from "./components/team/Team";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";

import Payments from "./components/payment/Payments";
import AdminLogin from "./components/admin/AdminLogin";
import AdminDashboard from "./components/admin/AdminDashboard";
import ProtectedRoute from "./components/admin/ProtectedRoute";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        {/* PUBLIC */}
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/courses" component={CourseHome} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/contact" component={Contact} />

        {/* ADMIN */}
        <Route exact path="/admin" component={AdminLogin} />
       <ProtectedRoute
          exact
          path="/admin/dashboard"
          component={AdminDashboard}
        />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
