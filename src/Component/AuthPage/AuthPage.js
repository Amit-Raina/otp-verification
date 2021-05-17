import "./AuthPage.css";
import { Component, Fragment } from "react";
import firebase from "../../firebase";
import { getData } from "../../redux/action/index";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class AuthPage extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    shouldRedirect: false,
  };

  getFirstName = (val) => {
    this.setState({
      firstname: val,
    });
  };
  getLastName = (val) => {
    this.setState({
      lastname: val,
    });
  };
  getPhoneNumber = (val) => {
    this.setState({
      phonenumber: val,
    });
  };

  submitHandler = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    if (this.state.firstname.length === 0 || this.state.lastname.length === 0) {
      alert("Enter Full Name");
      return;
    }
    if (this.state.phonenumber === "") {
      alert("Enter Phone Number");
      return;
    }
    if (this.state.phonenumber.length === 10)
      var number = "+91" + this.state.phonenumber;
    else {
      alert("Invalid Phone Number");
      return;
    }
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then((e) => {
        var code = prompt("Enter the Otp", "");
        if (code === null) return;
        e.confirm(code)
          .then((success) => {
            this.props.getData(this.state);
            setTimeout(() => {
              this.setState({
                shouldRedirect: true,
              });
            }, 500);
          })
          .catch((error) => {
            alert("Wrong Otp");
          });
      })
      .catch((error) => {
        alert("something went wrong !!");
      });
  };
  render() {
    return (
      <Fragment>
        <div className="container">
          <div
            id="recaptcha"
            style={{ position: "absolute", top: "65%", left: "43%" }}
          ></div>
          <div className="main-form">
            <form>
              <label>First Name : </label>
              <br />
              <input
                type="text"
                placeholder="Firstname"
                onChange={(event) => this.getFirstName(event.target.value)}
              />
              <br />
              <label>Last Name : </label>
              <br />
              <input
                type="text"
                placeholder="Lastname"
                onChange={(event) => this.getLastName(event.target.value)}
              />
              <br />
              <label>Phone Number : </label>
              <br />
              <input
                type="number"
                placeholder="Phone Number (10 digits)"
                onChange={(event) => this.getPhoneNumber(event.target.value)}
              />
              <br />
            </form>
            <Redirect to={this.state.shouldRedirect ? "/user" : "/"}></Redirect>
            <button onClick={this.submitHandler}>Submit</button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (data) => {
      dispatch(getData(data));
    },
  };
};

export default connect(null, mapDispatchToProps)(AuthPage);
