import styled from "styled-components";

const AuthWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: Raleway;

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        color: #FFFFFF;
        margin-bottom: 24px;
    }

    & > form {
        width: 100%;
        padding: 0px 25px 0px 25px;
        display: flex;
        flex-direction: column;
        align-items: center;

    }
    
    a {
        font-weight: bold;
        font-size: 15px;
        color: #FFFFFF;
    }
`;

export default AuthWrapper;
