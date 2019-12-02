import React from "react";
//import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { LoginForm, RegisterForm } from "modules";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path={["/", "/login"]} component={LoginForm} />
      <Route exact path="/register" component={RegisterForm} />
    </div>
  </section>
);

export default Auth;
//export default connect(({ user }) => ({ isAuth: user.isAuth }))(Auth);
