import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import WebFont from 'webfontloader';

import Login from "./auth/Login";
import Register from "./auth/Register";
import Deposit from "./operations/Deposit";
import Withdrawal from "./operations/Withdrawal";

import ResetCSS from "../styles/ResetCSS";

export default function App() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Saira Stencil One','Raleway']
          }
        });
    }, []);

    return (
        <AppWrapper>
            <ResetCSS/>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" exact={true}>
                        <Login/>
                    </Route>
                    <Route path="/register" exact={true}>
                        <Register/>
                    </Route>
                    <Route path="/deposit" exact={true}>
                        <Deposit/>
                    </Route>
                    <Route path="/withdrawal" exact={true}>
                        <Withdrawal/>
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