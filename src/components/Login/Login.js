/***************
Login Component :
****************
This is the login component is used to login to the application wit certain checks. 
The email Id and password are validated, once the value is checked it is redirected 
to the Dashboard.js page. There is check to see if the user is logged in or not. 
If the user is logged in, then on opening a new tab it will login to the Dashboard
component. If not, it redirects to the Login component.
 **************/


//IMPORT SCRIPTS
import React, {Component} from "react";
import "../Login/Login.css";
import {Redirect} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faEye} from '@fortawesome/free-solid-svg-icons'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogged: false,
            hidden: true,
            errors: {},
            loginParams: {
                email: "",
                password: ""
            }
        };
        this.handleFormChange = this
            .handleFormChange
            .bind(this);
        this.toggleShow = this
            .toggleShow
            .bind(this);
    }

    //toggle method
    toggleShow() {
        this.setState({
            hidden: !this.state.hidden
        });
    }

    //handle form
    handleFormChange = event => {
        let loginParamsNew = {
            ...this.state.loginParams
        };
        let val = event.target.value;
        loginParamsNew[event.target.name] = val;
        this.setState({loginParams: loginParamsNew});
    };

    //Login
    login = event => {
        var email = this.state.loginParams.email;
        let password = this.state.loginParams.password;
        this.validate();
        //Dummy values passed to check if the email id and password is a match or not
        if (email === "admin@gmail.com" && password === "admin123") {
            //email id ,password and dummy token is encoded and stored in cookies
            var encodedemail = btoa(email);
            var encodepassword = btoa(password);
            document.cookie = "emailid=" + encodedemail;
            document.cookie = "password=" + encodepassword;
            document.cookie = "token=a9sd198dfs265sp14";
            localStorage.setItem("token", "a9sd198dfs265sp14");
            this.setState({islogged: true});
        }
        event.preventDefault();
    };

    //Validate method
    validate() {
        let errors = {};
        let isValid = true;

        if (!this.state.loginParams.email) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        } else if (this.state.loginParams.email !== "undefined") {
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.loginParams.email)) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            } else if (this.state.loginParams.email !== "admin@gmail.com") {
                isValid = false;
                errors["email"] = "Incorrect email address.";
            }
        }

        if (!this.state.loginParams.password) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        } else if (this.state.loginParams.password !== "undefined") {
            if (this.state.loginParams.password.length < 6) {
                isValid = false;
                errors["password"] = "Password should be at least 6 characters.";
            } else if (this.state.loginParams.password !== "admin123") {
                isValid = false;
                errors["password"] = "Incorrect Password";
            }
        }

        this.setState({errors: errors});

        return isValid;
    }

    render() {
        if (localStorage.getItem("token")) {
            return <Redirect to="/dashboard"/>;
        }

        return (

            <div className="maincontainer">
                <div className="container-fluid">
                    <div className="row no-gutter">

                        <div className="col-md-6 d-none d-md-flex bg-image">
                            <div className="img_text_hd">
                                <h1>TravelFlag</h1>
                            </div>
                            <div className="img_text_tag">
                                <h1>Where the journey begins!</h1>
                            </div>
                        </div>

                        <div className="col-md-6 bg-light">
                            <div className="login d-flex align-items-center py-5">

                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-10 col-xl-7 mx-auto">
                                            <h3 className="display-4">Welcome Back!</h3>
                                            <p className="text-muted mb-4">Enter your credentials to access your account</p>
                                            <form onSubmit={this.login}>
                                                <div className="form-group mb-3">
                                                    <input
                                                        type="text"
                                                        name="email"
                                                        onChange={this.handleFormChange}
                                                        placeholder="Enter your Email ID"
                                                        className="form-control rounded-pill border-0 shadow-sm px-4"/>
                                                    <div className="validation">{this.state.errors.email}</div>
                                                </div>

                                                <div className="form-group mb-3">
                                                    <input
                                                        name="password"
                                                        onChange={this.handleFormChange}
                                                        placeholder="Enter your Password"
                                                        type={this.state.hidden
                                                        ? 'password'
                                                        : 'text'}
                                                        className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"/>
                                                    <FontAwesomeIcon
                                                        title={this.state.hidden
                                                        ? 'show password'
                                                        : 'hide password'}
                                                        src={this.state.hidden
                                                        ? {
                                                            faEye
                                                        }
                                                        : {
                                                            faEnvelope
                                                        }}
                                                        className="icon_eye icon_no_bag"
                                                        onClick={this.toggleShow}
                                                        icon={faEye}/>
                                                    <div className="validation">{this.state.errors.password}</div>
                                                </div>
                                                <button
                                                    type="submit"
                                                    value="Login"
                                                    className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm but_wdth">Sign in</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}
export default Login;