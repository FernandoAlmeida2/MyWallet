import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../../Contexts";
import { ButtonStyle, InputStyle } from "../../styles/CommonStyles";
import { COLORS } from "../../constants/colors";
import { useParams, useNavigate } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

const { background } = COLORS;

export default function NewData() {
  const { type } = useParams();
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [bodyData, setData] = useState({
    amount: "",
    description: "",
    type: type,
  });
  const user = useContext(UserContext);
  const typePt = type === "income" ? "entrada" : "saída";

  function handleForm(e) {
    setData({ ...bodyData, [e.target.name]: e.target.value });
  }

  async function submitData(e) {
    e.preventDefault();
    setLoading(true);
    try{
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
        const response = await axios.post(`${BASE_URL}/history`,bodyData, config);
        setLoading(false);
        console.log(response.data)
        navigate("/my-history");
    } catch(err){
        console.log(err.response.data);
        err.response.data.message && alert(err.response.data.message);
        setLoading(false);
    }
    
  }

  return (
    <RegDataStyle>
      <h1>Nova {typePt}</h1>
      <form onSubmit={submitData}>
        <InputStyle
          placeholder="Valor"
          name="amount"
          value={bodyData.amount}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <InputStyle
          placeholder="Descrição"
          name="description"
          value={bodyData.description}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <ButtonStyle isLoading={isLoading} disabled={isLoading}>
        {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="42"
            />
          ) : (
            `Salvar ${typePt}`
          )}
          
        </ButtonStyle>
      </form>
    </RegDataStyle>
  );
}

const RegDataStyle = styled.div`
  height: 100vh;
  background-color: ${background};
  display: flex;
  flex-direction: column;
  gap: 10.7vw;
  padding: 6.5vw;

  h1 {
    color: white;
    font-size: 6.93vw;
    font-weight: 700;
    line-height: 8.1vw;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4vw;
  }
`;
