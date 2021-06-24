import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import Loader from "react-loader-spinner";

import AuthWrapper from "./style";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    async function login(event) {
        event.preventDefault();
        try {
            setLoader(true);
            const response = await axios.post("http://localhost:4000/api/login",{email, password});
            if(!response.status === 200) throw new Error(response.status);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
        setLoader(false);
    }

    return (
        <AuthWrapper>
            <h1>MyWallet</h1>
            <Form onSubmit={login}>
                <Input placeholder={"E-mail"}
                        type={"email"}
                        value={ email } 
                        onChange={ (e) =>  setEmail(e.target.value) }
                        required
                />
                <Input placeholder={"Senha"}
                        type={"password"}
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                        required
                />
                <Button type={"submit"}
                        text={loader ? <Loader type="ThreeDots" color="#FFF" height={46} width={46}/> : "Entrar"}
                />
            </Form>
            <Link to={"/register"}>Primeira vez? Cadastre-se!</Link>
        </AuthWrapper>
    );
}