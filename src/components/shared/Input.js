import styled from "styled-components";

export default function Input(props) {
    const { placeholder, type, value, onChange, required, disabled, id, name } = props;
    return (
        <InputWrapper placeholder={placeholder}
                        type={type}
                        value={value}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                        min={"0.00"}
                        step={.01}
                        id={id}
                        name={name}
        />
    );
}

const InputWrapper = styled.input`

    width: 100%;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    border: none;
    padding-left: 15px;
    font-size: 20px;
    -webkit-appearance: none;
    -moz-appearance: textfield;

    &:valid {
        border: 2px solid green;
    }

    input:invalid {
        border: 2px solid red;
    }
`;