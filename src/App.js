import styled from "styled-components";
import { mainFont } from "./constants/fonts";
import ResetStyle from "./styles/ResetStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/SignUp/SignUp";
import { useState } from "react";
import { UserContext } from "./Contexts";
import MyHistory from "./Pages/MyHistory/MyHistory";
import NewData from "./Pages/NewData/NewData";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <AppContainer>
      <UserContext.Provider value={user}>
        <ResetStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/my-history" element={<MyHistory />} />
            <Route path="/new-data/:type" element={<NewData />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  * {
    box-sizing: border-box;
    font-family: ${mainFont};
  }
`;
