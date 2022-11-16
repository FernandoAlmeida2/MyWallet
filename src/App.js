import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";

export default function App() {
  return (
    <AppContainer>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont};
  }
`;
