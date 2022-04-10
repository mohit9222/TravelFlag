/*******************
Dashboard Component :
********************
This is the Dashboard Component file which is used to display the data. The Dashboard
consists of the logout option and once the user logsout, the values from cookies/localstorage
are deleted. 
 **************/


//IMPORT SCRIPTS
import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import "../Dashboard/Dashboard.css";
import Albums from "../Albums/Albums";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            islogout: false,
        };
    }

    //Signout and delete the values from cookies/localstorage
    signOut = () => {
        localStorage.removeItem("token");
        document.cookie = "token= ;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "emailid= ;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        document.cookie = "password= ;expires=Thu, 01 Jan 1970 00:00:00 UTC";
        this.setState({islogout: true});
    };
    render() {
        if (this.state.islogout) {
            return <Redirect to="/login"/>;
        }
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand logo">TravelFlag</a>
                            <a
                                className="logout"
                                onClick={this.signOut}
                                type="submit">Logout</a>
                    </div>
                </nav>

                <Albums/>
            </div>

        );
    }
}

export default Dashboard;