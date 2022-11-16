import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { useState } from "react";
import { TokenContext } from "./Contexts";

export default function App() {
  const [token, setToken] = useState(null);
  return (
    <AppContainer>
      <TokenContext.Provider value={token}>
        <ResetStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setToken={setToken} />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
      </TokenContext.Provider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont};
  }
`;
