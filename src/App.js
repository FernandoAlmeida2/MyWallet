import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <AppContainer>
      <ResetStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" />
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
