import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
import { LogRegStyle, InputStyle, ButtonStyle, StyledLink } from "../../styles/CommonStyles";
import { BASE_URL } from "../../constants/urls";
//import { useNavigate } from "react-router-dom";

export default function Login({ setToken }) {
  const [isLoading, setLoading] = useState(false);
  const [loginBody, setLogin] = useState({ email: "", password: "" });

  function handleForm(e) {
    setLogin({ ...loginBody, [e.target.name]: e.target.value });
  }
  async function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    try{
        const response = await axios.post(`${BASE_URL}/sign-in`, loginBody);
        setLoading(false);
        setToken(response.data.token);
    } catch(err){
        console.log(err.response.data);
        err.response.data.message && alert(err.response.data.message);
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
      <StyledLink to="/sign-up">Primeira vez? Cadastre-se!</StyledLink>
    </LogRegStyle>
  );
}

