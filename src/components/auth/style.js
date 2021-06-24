import styled from "styled-components";

const AuthWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Raleway;

    & > div {
        display: flex;
        margin-bottom: 20px;
        width: 325px;
        height: 58px;
        background: white;
        border-radius: 5px;
        font-weight: bold;
        color: red;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }
    
    a {
        font-weight: bold;
        font-size: 15px;
        color: #FFFFFF;
    }
`;

export default AuthWrapper;
