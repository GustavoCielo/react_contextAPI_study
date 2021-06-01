import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
  }
  span {
    display: block;
    margin: 6px 0;
  }

  button {
    cursor: pointer;
    border: 1px dashed black;
    background: lightblue;
  }

  button:hover {
    background: red;
    color: white;
  }
`;

export const List = styled.ul``;
