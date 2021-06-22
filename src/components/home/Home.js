import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline, ExitOutline } from 'react-ionicons'

export default function Home() {
    return (
        <HomeWrapper>
            <span>
                <h1>Olá, Fulano</h1>
                <ExitOutline height="24px" width="24px" color={"#FFFFFF"}/>
            </span>
            <ListCanvas>
                <span>
                    <p>Não há registros de<br></br>entrada ou saída</p>
                </span>
            </ListCanvas>
            <OperationSelection>
                <div>
                    <AddCircleOutline height="22px" width="22px" color={"#FFFFFF"}/>
                    <p>Nova<br></br>entrada</p>
                </div>
                <span></span>
                <div>
                    <RemoveCircleOutline height="22px" width="22px" color={"#FFFFFF"}/>
                    <p>Nova<br></br>saída</p>
                </div>
            </OperationSelection>
        </HomeWrapper>
    );
}

const HomeWrapper = styled.div`
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

const ListCanvas = styled.div`
    margin: 0px 25px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;

    & >  span {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        p {
            font-size: 20px;
            color: #868686;
            text-align: center;
        }
    }
`;

const OperationSelection = styled.div`
    display: flex;
    margin: 13px 25px 0px;

    & > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;
        padding: 10px;
        font-weight: bold;
        font-size: 17px;
        color: #FFFFFF;

    }

    & > span {
        width: 15px;
    }
`;