import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AddCircleOutline, RemoveCircleOutline, ExitOutline } from 'react-ionicons'
import { useEffect, useState } from "react";
import axios from "axios";

import Entry from "./Entry";

export default function Home() {
    const [entries, setEntries] = useState([]);
    const history = useHistory();

    useEffect(() => { 
        async function requestHistory () {
            try {
                const request = await axios.get("http://localhost:4000/api/history");
                setEntries(request.data);
            } catch (e) {
                console.log(e);
            }
        }
        requestHistory();
    },[])


    return (
        <HomeWrapper>
            <span>
                <h1>Olá, Fulano</h1>
                <ExitOutline height="24px" width="24px" color={"#FFFFFF"}/>
            </span>
            <ListCanvas>
                {entries.length > 0
                    ?
                    <ul>
                        {entries.map((entry, index) => (<Entry key={index} {...entry}/>))}
                    </ul>
                    :
                    <span>
                        <p>Não há registros de<br></br>entrada ou saída</p>
                    </span>
                }
            </ListCanvas>
            <OperationSelection>
                <div onClick={() => history.push("/deposit")}>
                    <AddCircleOutline height="22px" width="22px" color={"#FFFFFF"}/>
                    <p>Nova<br></br>entrada</p>
                </div>
                <span></span>
                <div onClick={() => history.push("/withdrawal")}>
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
    padding: 23px 12px 12px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    font-family: Raleway;

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

    & > ul {
        width: 100%;
        font-size: 19px;
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