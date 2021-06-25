import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  AddCircleOutline,
  RemoveCircleOutline,
  ExitOutline,
} from "react-ionicons";
import { useEffect, useState } from "react";
import axios from "axios";

import Entry from "./Entry";

export default function Home(props) {
  const { removeUser, user } = props;
  const [entries, setEntries] = useState([]);
  const [total, setTotal] = useState(0);
  const history = useHistory();

  const { token, name } = user;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    async function requestHistory() {
      try {
        const request = await axios.get(
          "http://localhost:4000/api/history",
          config
        );
        setEntries(request.data.transactions);
        setTotal(request.data.total);
      } catch (error) {
        if (error.response !== undefined && error.response.status === 401) {
          alert("Faça login novamente!");
          removeUser();
          history.push("/login");
        }
        console.log(error);
      }
    }
    requestHistory();
  }, []);

  async function logout() {
    removeUser();
    await axios.post("http://localhost:4000/api/logout", {}, config);
    history.push("/login");
  }

  return (
    <HomeWrapper>
      <span>
        <h1>{`Olá, ${name}`}</h1>
        <ExitOutline
          height="24px"
          width="24px"
          color={"#FFFFFF"}
          onClick={logout}
        />
      </span>
      <ListCanvas>
        {entries.length > 0 ? (
          <div>
            <ul>
              {entries.map((entry, index) => (
                <Entry key={index} {...entry} />
              ))}
            </ul>
            <Total total={total}>
              <span>Saldo</span>
              <span>{(total / 100).toFixed(2).replace(".", ",")}</span>
            </Total>
          </div>
        ) : (
          <span>
            <p>
              Não há registros de<br></br>entrada ou saída
            </p>
          </span>
        )}
      </ListCanvas>
      <OperationSelection>
        <div onClick={() => history.push("/deposit")}>
          <AddCircleOutline height="22px" width="22px" color={"#FFFFFF"} />
          <p>
            Nova<br></br>entrada
          </p>
        </div>
        <span></span>
        <div onClick={() => history.push("/withdrawal")}>
          <RemoveCircleOutline height="22px" width="22px" color={"#FFFFFF"} />
          <p>
            Nova<br></br>saída
          </p>
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
      color: #ffffff;
    }
  }
`;

const ListCanvas = styled.div`
  margin: 0px 25px;
  padding: 23px 12px 12px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  font-family: Raleway;

  & > span {
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
  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ul {
      width: 100%;
      font-size: 19px;
      overflow-y: scroll;
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
    background: #a328d6;
    border-radius: 5px;
    padding: 10px;
    font-weight: bold;
    font-size: 17px;
    color: #ffffff;
  }

  & > span {
    width: 15px;
  }
`;

const Total = styled.span`
  margin-top: 20px;
  height: 20px;
  display: flex;
  justify-content: space-between;

  & > span:first-child {
    font-weight: bold;
    font-size: 17px;
  }

  & > span:last-child {
    color: ${(props) => {
      if (props.total > 0) {
        return "green";
      } else if (props.total < 0) {
        return "red";
      }
    }};
  }
`;
