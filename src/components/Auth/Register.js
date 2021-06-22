import { useState } from "react";
import { Link } from "react-router-dom";

import AuthWrapper from "./style";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] =  useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <AuthWrapper>
            <h1>MyWallet</h1>
            <form>
                <Input placeholder={"Nome"}
                        type={"text"}
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                        required
                />
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
                <Input placeholder={"Confirme a senha"}
                        type={"password"}
                        value={ confirmPassword }
                        onChange={ (e) => setConfirmPassword(e.target.value) }
                        required
                />
                <Button type={"submit"}
                        text={"Cadastrar"}
                />
            </form>
            <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
        </AuthWrapper>
    );
}