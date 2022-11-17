import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { background, light_purple, gray } = COLORS;

export const HistoryStyle = styled.main`
  height: 100vh;
  background-color: ${background};
`;
export const MainStyle = styled.div`
  padding: 6.7vw;
  display: flex;
  flex-direction: column;
  gap: 3.5vw;
`;
export const HeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: white;
    font-size: 6.93vw;
    font-weight: 700;
  }
  img {
    cursor: pointer;
  }
`;
 export const ContentStyle = styled.div`
  width: 87vw;
  height: 119vw;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: ${(props) => props.isData ? "column" : "row"};
  justify-content: ${(props) => props.isData ? "start" : "center"};
  align-items: ${(props) => props.isData ? "none" : "center"};
  padding: 6vw 3.2vw 3.2vw 3.2vw;
  gap: 6vw;
  margin-top: 3.5vw;
  p {
    font-size: 5.3vw;
    color: ${gray};
    text-align: center;
    line-height: 6.27vw;
  }
`;
export const ButtonsDiv = styled.div`
  display: flex;
  gap: 4vw;
`;
export const AddStyle = styled.div`
  width: 41.3vw;
  height: 30.4vw;
  border-radius: 5px;
  background-color: ${light_purple};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4vw 0 4vw 4vw;
  cursor: pointer;

  ion-icon {
    color: white;
    width: 5.83vw;
    height: 5.83vw;
  }
  p {
    font-size: 4.53vw;
    font-weight: 700;
    color: white;
  }
`;
export const HistElementStyle = styled.div`
  display: flex;
  justify-content: space-between;
  
`
export const DataStyle = styled.div`
  font-size: 4.27vw;
  font-weight: 400;
  color: ${(props) => props.color};
  span{
    color: #c6c6c6;
  }
`;
