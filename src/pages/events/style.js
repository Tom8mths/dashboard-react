import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: "Spartan", sans-serif;
  padding-top: 1rem;
  width: 100vw:
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;

  // Margin for large screens
  @media only screen and (min-width: 600px) {
    margin-left: 5rem;
  }
`;

export const Wrapper = styled.div`
  background-color: blue;
  width: 90vw;
`;

export const Section = styled.div`
  background-color: white;
  height: 60vh;
  width: 100%;

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
`;
