import styled from "styled-components";

export const OperationsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Raleway;

  & > div {
    display: flex;
    margin: 25px 25px 22px;
    width: 325px;
    height: 58px;
    background: white;
    border-radius: 5px;
    font-weight: bold;
    color: green;
    justify-content: center;
    align-items: center;
  }

  & > span {
    width: 100%;
    padding: 25px 25px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-weight: 700;
      font-size: 26px;
      color: #ffffff;
    }
  }
`;

export const CurrencyInputWrapper = styled.span`
  input {
    width: 100%;
    height: 58px;
    background: #ffffff;
    border-radius: 5px;
    margin-bottom: 13px;
    border: none;
    padding-left: 15px;
    font-size: 20px;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  }
`;
