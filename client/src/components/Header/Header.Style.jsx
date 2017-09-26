import styled from "styled-components";

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

export const LIL = styled.p`
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
  // padding-left: 40px;
  margin-right: 40px;
  margin-left: 40px;

  background-color: #58fb58;
`;

export const H4 = styled.h4`
  font-family: "Tangerine", cursive;
  font-weight: bold;
  font-size: 4em;
  color: black;
  padding-right: 50px;
`;
