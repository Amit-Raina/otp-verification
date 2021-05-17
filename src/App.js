import "./App.css";
import { Component, Fragment } from "react";
import { Route, Switch } from "react-router";
import User from "./Component/User/User";
import AuthPage from "./Component/AuthPage/AuthPage";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <Switch>
            {this.props.UserDetail !== null && (
              <Route path="/user" component={User} />
            )}
            <Route path="/" component={AuthPage} />
          </Switch>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    UserDetail: state,
  };
};

export default connect(mapStateToProps, null)(App);
