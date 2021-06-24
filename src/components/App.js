import React, { useEffect, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import WebFont from 'webfontloader';

import Home from "./home/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Deposit from "./operations/Deposit";
import Withdrawal from "./operations/Withdrawal";

import ResetCSS from "../styles/ResetCSS";

export default function App() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Saira Stencil One','Raleway']
          }
        });
    }, []);

    if (!user && !['/login', '/register'].includes(window.location.pathname))
		window.location.pathname = '/login';
	else if (user && ['/login', '/register'].includes(window.location.pathname))
		window.location.pathname = '/';

    const createUser = (user) => {
		localStorage.setItem('user', JSON.stringify(user));
		setUser(user);
	};

	const removeUser = () => {
		localStorage.removeItem('user');
		setUser(null);
	};

    return (
        <AppWrapper>
            <ResetCSS/>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact={true}>
                        <Home removeUser={removeUser} user={user}/>
                    </Route>
                    <Route path="/login" exact={true}>
                        <Login createUser={createUser}/>
                    </Route>
                    <Route path="/register" exact={true}>
                        <Register/>
                    </Route>
                    <Route path="/deposit" exact={true}>
                        <Deposit user={user}/>
                    </Route>
                    <Route path="/withdrawal" exact={true}>
                        <Withdrawal user={user}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </AppWrapper>
    );
}

const AppWrapper = styled.div`
    margin:0 auto;
    width: 375px;
    height: 667px;
    background: #8C11BE;
`;