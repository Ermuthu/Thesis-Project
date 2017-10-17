import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuLink = styled(Link)`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  border: 1px solid yellow;
  background: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1em;
  font-weight: 700;
  outline: none;
  background: transparent;
  min-width: 150px;
  font-size: 1.1rem;
  transition: border 0.35s ease;
  &:hover {
    border: 1px solid transparent;
    &::after {
      position: absolute;
      content: "";
      width: 0;
      height: 3px;
      bottom: 0;
      left: 0;
      transition: all 0.35s ease;
      background-color: yellow;
      width: 100%;
    }
  }
  &:active {
    background: transparent;
  }
`;
