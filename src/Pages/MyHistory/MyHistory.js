import { COLORS } from "../../constants/colors";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Contexts";
import logout from "../../images/LogoutIcon.png";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import SearchingData from "../../components/SearchingData";
import { useNavigate } from "react-router-dom";
import {
  HistoryStyle,
  MainStyle,
  HeaderStyle,
  ContentStyle,
  HistElementStyle,
  DataStyle,
  ButtonsDiv,
  AddStyle,
  ResultStyle,
} from "./Styles";

const { green, red } = COLORS;

export default function MyHistory() {
  const [historyData, setHistory] = useState(null);
  const user = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(`${BASE_URL}/history`, config)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        err.response.data.message && alert(err.response.data.message);
      });
  }, [user]);

  if (historyData === null) return <SearchingData />;
  const sum_Balance = historyData.reduce(
    (previous, current) =>
      current.type === "income"
        ? previous + Number(current.amount)
        : previous - Number(current.amount),
    0
  );
  const dataExists = historyData.length !== 0;
  return (
    <HistoryStyle>
      <MainStyle>
        <HeaderStyle>
          <h1>Olá, {user.name}</h1>
          <img src={logout} alt="logout" onClick={() => navigate("/")} />
        </HeaderStyle>
        <ContentStyle isData={dataExists}>
          <div>
            {historyData.map((data) => (
              <HistElementStyle key={data._id}>
                <DataStyle color="black">
                  <span>{data.date}</span> &nbsp;{data.description}
                </DataStyle>
                <DataStyle color={data.type === "income" ? green : red}>
                  {Number(data.amount).toFixed(2).replace(".", ",")}
                </DataStyle>
              </HistElementStyle>
            ))}
          </div>
          {dataExists ? (
            <HistElementStyle>
              <ResultStyle>SALDO</ResultStyle>
              <DataStyle color={sum_Balance >= 0 ? green : red}>
                {sum_Balance.toFixed(2).replace(".", ",")}
              </DataStyle>
            </HistElementStyle>
          ) : (
            <p>
              Não há registros de
              <br />
              entrada ou saída
            </p>
          )}
        </ContentStyle>
        <ButtonsDiv>
          <AddStyle onClick={() => navigate("/new-data/income")}>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              entrada
            </p>
          </AddStyle>
          <AddStyle onClick={() => navigate("/new-data/expense")}>
            <ion-icon name="remove-circle-outline" ></ion-icon>
            <p>
              Nova
              <br />
              saída
            </p>
          </AddStyle>
        </ButtonsDiv>
      </MainStyle>
    </HistoryStyle>
  );
}
