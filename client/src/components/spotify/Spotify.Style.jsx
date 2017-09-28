import styled from "styled-components";

export const SongContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`;

export const ArtistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const PlaylistContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
  align-content: center;
  align-items: center;
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
