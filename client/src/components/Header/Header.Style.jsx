import styled, { css } from "styled-components";

export const hMain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: inherit;
  justify-content: space-between;
`;

export const UL = styled.ul`
  display: flex;
  justify-content: center;
  font-size: 3em;
`;

export const LI = styled.a`
  &:hover {
    opacity: 0.9;
    animation: fade-in 3s linear infinite;
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 1s ease-in-out;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #58fb58;
`;

export const Logout = styled.div`
  display: flex;
  justify-content: space-around;

  background-color: #58fb58;
`;

export const H4 = styled.h4`
  font-family: "Tangerine", cursive;
  font-weight: bold;
  font-size: 3em;
  color: black;
`;

export const Inner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  text=align: center;
  font-size: 2em;
  background-color: black;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  color: white;
  padding-top: 13px;
  margin-left: 80px;
  margin-top: 80px;
  opacity: 0;
  &:hover {
    opacity: 0.8;
    animation: fade-in 3s linear infinite;
    cursor: pointer;
  }
`;
