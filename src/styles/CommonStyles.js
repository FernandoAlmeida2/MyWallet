import styled from "styled-components";
import { COLORS } from "../constants/colors";
import { logoFont } from "../constants/fonts";
import { Link } from "react-router-dom";

const { background, light_purple } = COLORS;

export const LogRegStyle = styled.div`
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

export const InputStyle = styled.input`
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

export const ButtonStyle = styled.button`
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

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 4vw;
  color: white;
  text-decoration: none;

  :hover{
    text-decoration: underline;
  }
`;
