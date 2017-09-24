import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.div`
  background-image: url(${require("./background.jpg")});
  background-position: cover;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 90vh;
`;

export const SpI = styled.div`
  width: 40vw;
  float: left;
  height: 65vh;
  text-align: center;
  background-image: url(${require("./Spotify.png")});
  opacity: 0.9;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  &:hover {
    transform: scale(1.1);
    transition: transform 1s ease-in-out;
    cursor: pointer;
  }
`;

export const SpL = styled(Link)`
  text-align: center;
  font-size: 4em;
  cursor: pointer;
  color: #2dcd90;
  transition: ease-in-out 2s;
  &:hover {
    animation: pulse 4s linear infinite;
  }
`;

export const YtI = styled.div`
  width: 40vw;
  float: right;
  height: 65vh;
  text-align: center;
  background-image: url(${require("./YouTube.png")});
  opacity: 0.9;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  &:hover {
    transform: scale(1.1);
    transition: transform 1s ease-in-out;
    cursor: pointer;
  }
`;
export const YtL = styled(Link)`
  margin-right: 30px;
  font-size: 4em;
  cursor: pointer;
  color: rgb(255, 75, 75);
  transition: ease-in-out 2s;
  &:hover {
    animation: pulse-yt 1.5s linear infinite;
  }
`;
