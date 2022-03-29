import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/pages/HomePage/Home";
import Services from "./Components/pages/Services/Services";
import Products from "./Components/pages/Products/Products";
import SignUp from "./Components/pages/SignUp/SignUp";
import SignIn from "./Components/pages/SignIn/SignIn";
import Navbar from "./Components/pages/Shared/Navbar";
import Footer from "./Components/pages/Footer/Footer";
import Pricing from "./Components/Pricing";
import NotFound from "./Components/pages/NotFound/NotFound";
import PrivateRoute from './Components/pages/PrivateRoute/PrivateRoute';
import AuthProvider from "./contexts/AuthProvider";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <PrivateRoute path="/products/details/:productId">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/services/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/home-service/details/:homeServiceId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/pricing/">
              <Pricing></Pricing>
            </Route>
            <PrivateRoute path="/courses/details/:CourseId">
              <Details></Details>
            </PrivateRoute>
            <Route path="/sign-in">
              <SignIn></SignIn>
            </Route>
            <Route path="/sign-up">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;