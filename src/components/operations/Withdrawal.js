import { useState } from "react";

import OperationsWrapper from "./style";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Withdrawal() {
    const [value, setValue] = useState("");
    const [description, setDescription] =  useState("");

    return (
        <OperationsWrapper>
            <h1>Nova saída</h1>
            <Form>
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
                        text={"Salvar saída"}
                />
            </Form>
        </OperationsWrapper>
    );
}