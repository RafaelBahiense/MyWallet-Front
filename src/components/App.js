import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import WebFont from 'webfontloader';

import Login from "./Auth/Login";
import Register from "./Auth/Register";

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
                    <Route path="/" exact={true}>
                        <Login/>
                    </Route>
                    <Route path="/register" exact={true}>
                        <Register/>
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