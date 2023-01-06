import './App.css';
import Dashboard from "./Layout/Dashboard";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {connect} from "react-redux";
import {useEffect} from "react";
import SignIn from "./Pages/SignIn";
import Client from "./Pages/Client";
import Projects from "./Pages/Projects";
import Invoices from "./Pages/Invoices";
import Profile from "./Pages/Profile";
import SignUp from "./Pages/SIgnUp";

const mapStateToProps = (state) => {
    return {user: state.auth.isLoggedIn}
}

const App = (props) => {


    useEffect(() => {


    }, [props.user])
//test coms
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={props.user ? <Dashboard/> : <SignIn/>}>
                    <Route exact path="/" element={<Client/>}/>
                    <Route path="Clients" element={<Client/>}/>
                    <Route path="Projects" element={<Projects/>}/>
                    <Route path="Invoices" element={<Invoices/>}/>
                    <Route path="Profile" element={<Profile/>}/>
                </Route>
                <Route path="signup" element={<SignUp/>}/>

            </Routes>
        </BrowserRouter>

    )
        ;
}


export default connect(mapStateToProps)(App)