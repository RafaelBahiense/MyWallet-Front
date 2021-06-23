import styled from "styled-components";

const OperationsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    font-family: Raleway;

    & > span {
        width: 100%;
        padding: 25px 25px 22px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
            font-weight: 700;
            font-size: 26px;
            color: #FFFFFF;
        }
    }
`;

export default OperationsWrapper;
