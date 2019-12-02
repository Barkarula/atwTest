import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
//import { Switch} from "react-router-dom";

import { Auth, Profile, Home, Reference, Workers, Messages } from "pages";
import { WorkerContainer } from "containers";
import AutHoc from './hoc/auth';
import Layout from './hoc/layout';

//<Route path="*" component={Page404} />

const App = props => {
  const { isAuth } = props;
    return (
      <div className="wrapper">
        <Layout>
          <Route exact path={["/login", "/register"]} component={AutHoc(Auth, null)} />
          <Route exact path="/profile" component={AutHoc(Profile, true)}/>
          <Route exact path="/home" component={AutHoc(Home, null)} />
          <Route exact path="/reference" component={AutHoc(Reference, true)} />
          <Route 
            exact path='/'
            render={() => isAuth ? <Home /> : <Redirect to='/login' />} 
          />
          <Route exact path="/workers" component={AutHoc(Workers, true)} />
          <Route exact path="/workers/:id" component={AutHoc(WorkerContainer, true)}/>
          <Route exact path="/im" component={AutHoc(Messages, false)} />
          </Layout>
        </div>
      );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
