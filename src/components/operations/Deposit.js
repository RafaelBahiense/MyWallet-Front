import { useState } from "react";
import axios from "axios";
import { ArrowForwardOutline } from 'react-ionicons'
import { useHistory } from "react-router-dom";

import OperationsWrapper from "./style";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Deposit() {
    const [value, setValue] = useState("");
    const [description, setDescription] =  useState("");

    const history = useHistory();

    function deposit (event) {
        event.preventDefault();
        try {
            const request = axios.post("http://localhost:4000/api/deposit", {value, description}); 
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <OperationsWrapper>
            <span>
                <h1>Nova entrada</h1>
                <ArrowForwardOutline height="24px"
                                        width="24px"
                                        color={"#FFFFFF"}
                                        onClick={() => history.push("/")}
                />
            </span>
            <Form onSubmit={deposit}>
                <Input placeholder={"Valor"}
                        type={"number"}
                        value={ value } 
                        onChange={ (e) =>  setValue(e.target.value) }
                        required
                />
                <Input placeholder={"Descrição"}
                        type={"text"}
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                        required
                />
                <Button type={"submit"}
                        text={"Salvar entrada"}
                />
            </Form>
        </OperationsWrapper>
    );
}