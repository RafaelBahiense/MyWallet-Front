import { useState } from "react";
import { Link } from "react-router-dom";

import AuthWrapper from "./style";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");

    return (
        <AuthWrapper>
            <h1>MyWallet</h1>
            <form>
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
                        text={"Entrar"}
                />
            </form>
            <Link to={"/register"}>Primeira vez? Cadastre-se!</Link>
        </AuthWrapper>
    );
}