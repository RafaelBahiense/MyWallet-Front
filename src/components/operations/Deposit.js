import { useState } from "react";
import axios from "axios";
import { ArrowForwardOutline } from 'react-ionicons'
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import CurrencyInput from 'react-currency-input-field';

import {OperationsWrapper, CurrencyInputWrapper} from "./style";
import Form from "../shared/Form";
import Input from "../shared/Input";
import Button from "../shared/Button";

export default function Deposit(props) {
    const {user} = props;
    const [value, setValue] = useState("");
    const [description, setDescription] =  useState("");
    const [loader, setLoader] = useState(false);

    const history = useHistory();

    async function deposit (event) {
        event.preventDefault();
        if(!loader) {
            try {
                setLoader(true);
                const normalizedValue = Number(value.replace(",",".")).toFixed(2) * 100;
                await axios.post("http://localhost:4000/api/deposit", {value: normalizedValue, description});
                setValue("");
                setDescription("");
            } catch (e) {
                console.log(e);
            }
            setLoader(false);
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
                <CurrencyInputWrapper>
                    <CurrencyInput
                        placeholder={"Valor"}
                        decimalsLimit={2}
                        decimalSeparator={","}
                        groupSeparator={"."}
                        value={ value }
                        onValueChange={(newValue) => newValue === undefined ? setValue("") : setValue(newValue)}
                    />
                </CurrencyInputWrapper>
                <Input placeholder={"Descrição"}
                        type={"text"}
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                        disabled={loader}
                        required
                />
                <Button type={"submit"}
                        text={loader ? <Loader type="ThreeDots" color="#FFF" height={46} width={46}/> : "Salvar entrada"}
                >
                    
                </Button>
            </Form>
        </OperationsWrapper>
    );
}