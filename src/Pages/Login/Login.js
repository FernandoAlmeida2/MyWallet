import { COLORS } from "../../constants/colors";
import { logoFont } from "../../constants/fonts";
import { RotatingLines } from "react-loader-spinner";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const { background, light_purple } = COLORS;

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [loginBody, setLogin] = useState({ email: "", password: "" });

  function handleForm(e) {
    setLogin({ ...loginBody, [e.target.name]: e.target.value });
  }
  async function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    try{
        const response = await axios.post("http://localhost:5000/sign-in", loginBody);
        setLoading(false);
        console.log(response.data);
    } catch(err){
        console.log(err.response.data);
        setLoading(false);
    }
    
  }

  return (
    <LogRegStyle>
      <h1>MyWallet</h1>
      <form onSubmit={submitLogin}>
        <InputStyle
          placeholder="E-mail"
          name="email"
          type="email"
          value={loginBody.email}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <InputStyle
          placeholder="Senha"
          type="password"
          name="password"
          value={loginBody.password}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <ButtonStyle
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? (
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="42"
            />
          ) : (
            "Entrar"
          )}
        </ButtonStyle>
      </form>
      <p>Primeira vez? Cadastre-se!</p>
    </LogRegStyle>
  );
}

const LogRegStyle = styled.div`
  height: 100vh;
  background-color: ${background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10vw;

  h1 {
    font-family: ${logoFont};
    color: white;
    font-size: 8.53vw;
    font-weight: 400;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 4vw;
  }
  p {
    font-weight: 700;
    font-size: 4vw;
    color: white;
  }
`;

const InputStyle = styled.input`
  width: 87vw;
  height: 15.5vw;
  border: none;
  border-radius: 5px;
  background-color: white;
  opacity: ${(props) => (props.isLoading ? 0.7 : 1)};
  padding-left: 4vw;

  ::placeholder {
    opacity: 1;
    font-size: 5.33vw;
  }
`;

const ButtonStyle = styled.button`
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 87vw;
  height: 12.3vw;
  background: ${light_purple};
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 5.33vw;
  font-weight: 700;
  cursor: ${(props) => (props.isLoading ? "auto" : "pointer")};
`;
