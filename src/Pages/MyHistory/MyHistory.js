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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        err.response.data.message && alert(err.response.data.message);
      });
  }, [user]);

  if (historyData === null) return <SearchingData />;

  return (
    <HistoryStyle>
      <MainStyle>
        <HeaderStyle>
          <h1>Olá, {user.name}</h1>
          <img src={logout} alt="logout" onClick={() => navigate("/")} />
        </HeaderStyle>
        <ContentStyle isData={historyData.length !== 0}>
          {historyData.length === 0 && (
            <p>
              Não há registros de
              <br />
              entrada ou saída
            </p>
          )}
          {historyData.map((data) => (
            <HistElementStyle key={data._id}>
              <DataStyle color="black">
                <span>{data.date}</span> &nbsp;{data.description}
              </DataStyle>
              <DataStyle color={data.type === "income" ? green : red}>
                {data.amount.toFixed(2).replace(".", ",")}
              </DataStyle>
            </HistElementStyle>
          ))}
        </ContentStyle>
        <ButtonsDiv>
          <AddStyle>
            <ion-icon name="add-circle-outline"></ion-icon>
            <p>
              Nova
              <br />
              entrada
            </p>
          </AddStyle>
          <AddStyle>
            <ion-icon name="remove-circle-outline"></ion-icon>
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
