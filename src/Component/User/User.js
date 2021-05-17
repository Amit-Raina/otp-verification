import "./User.css";
import { Component, Fragment } from "react";
import { connect } from "react-redux";

class User extends Component {
  render() {
    return (
      <Fragment>
        <div className="user-box">
          <h1>
            Welcome back,{" "}
            {this.props.UserDetail.firstname +
              " " +
              this.props.UserDetail.lastname}
          </h1>
          <h2>
            Account Verified{" "}
            <i className="fas fa-check-circle" style={{ color: "green" }}></i>
          </h2>
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
export default connect(mapStateToProps, null)(User);
