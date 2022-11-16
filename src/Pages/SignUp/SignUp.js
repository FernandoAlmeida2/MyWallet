import { RotatingLines } from "react-loader-spinner";
import { useState } from "react";
import axios from "axios";
import {
  LogRegStyle,
  InputStyle,
  ButtonStyle,
  StyledLink,
} from "../../styles/CommonStyles";
import { BASE_URL } from "../../constants/urls";

export default function SignUp() {
  const [isLoading, setLoading] = useState(false);
  const [registerBody, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  function handleForm(e) {
    setLogin({ ...registerBody, [e.target.name]: e.target.value });
  }
  async function submitLogin(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/sign-up`, registerBody);
      setLoading(false);
      console.log(response.data);
    } catch (err) {
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
          placeholder="Nome"
          name="name"
          minlength="3"
          value={registerBody.name}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <InputStyle
          placeholder="E-mail"
          name="email"
          type="email"
          value={registerBody.email}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <InputStyle
          placeholder="Senha"
          type="password"
          name="password"
          value={registerBody.password}
          onChange={handleForm}
          isLoading={isLoading}
          disabled={isLoading}
        />
        <InputStyle
          placeholder="Confirme a senha"
          type="password"
          name="repeat_password"
          value={registerBody.repeat_password}
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
            "Cadastrar"
          )}
        </ButtonStyle>
      </form>
      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </LogRegStyle>
  );
}
