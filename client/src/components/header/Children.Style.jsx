import styled, { css } from "styled-components";
import { Green, Black } from "../../theme/colors";
import { Flex } from "../../theme/grid";
import { Link } from "react-router-dom";

export const Nav = styled.header`
  font-size: 1.3em;
  padding-top: 40px;
  height: 100px;
  align-items: center;
  background-color: inherit;
  justify-content: center;
  color: ${Black};
`;

export const StyledP = styled.p`
  position: relative;
  float: right;
  width: 60%;
  text-align: right;
  width: 60vw;
  margin-right: 2%;
  margin-left: auto;
  font-family: "Tangerine", cursive;
  @media (max-width: 700px) {
    float: none !important;
    width: 90% !important;
  }
  ${({ nowrap }) => (nowrap ? css`white-space: nowrap;` : "")};
`;

export const Home = styled(Link)`
  font-family: "Roboto", serif;
  position: relative;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  background: none;
  cursor: pointer;
  padding: 1em;
  margin: 50px 0 75px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  background: transparent;
  min-width: 150px;
  font-size: 1.1rem;
  transition: border 0.35s ease;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: all 0.35s ease;
    background-color: ${Green};
  }

  &:hover {
    border: 1px solid transparent;
    color: ${Green};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Login = styled.a`
  font-family: "Roboto", serif;
  position: relative;
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  background: none;
  cursor: pointer;
  padding: 1em;
  margin: 50px 0 75px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  outline: none;
  background: transparent;
  min-width: 150px;
  font-size: 1.1rem;
  transition: border 0.35s ease;

  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    transition: all 0.35s ease;
    background-color: ${Green};
  }

  &:hover {
    border: 1px solid transparent;
    color: ${Green};
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Menu = styled(Flex)`
  height: 50px;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 3em;
`;
