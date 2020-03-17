import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.div`
  font-family: "Spartan", sans-serif;
  padding-top: 1rem;
  width: 100vw:
  height: 100vh;
  display: flex;
  justify-content: center;
  z-index: 8;

  // Margin for large screens
  @media only screen and (min-width: 600px) {
    margin-left: 5rem;
  }
`;

export const Wrapper = styled.div`
  width: 90vw;
  h1 {
    color: var(--text-primary);
    margin: 1rem 0;
  }
`;

export const Section = styled.div`
  background-color: white;
  height: 72vh;
  width: 100%;
  padding: 0.5rem;

  h2 {
    color: var(--pink);
    &:after {
      margin: 0.5rem 0;
      content: "";
      width: 100%;
      display: block;
      background-color: var(--text-secondary);
      height: 1px;
    }
  }

  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.45);

  input[type="text"] {
    background-color: var(--bg-lightblue);
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border: 1px solid var(--text-secondary);
    width: 100%;
    padding: 12px 0 12px 35px;
    margin: 10px 3px;
    font-family: "Spartan", sans-serif;
    box-sizing: border-box;
  }
  textarea {
    border: 1px solid var(--text-secondary);
    background-color: var(--bg-lightblue);
    width: 100%;
    padding: 12px;
    margin: 10px 3px;
    font-family: "Spartan", sans-serif;
    box-sizing: border-box;
  }
  input[type="button"],
  input[type="submit"],
  input[type="reset"] {
    background-image: var(--bg-active);
    border: none;
    color: white;
    padding: 12px 20px;
    text-decoration: none;
    margin: 10px 2px;
    cursor: pointer;
  }
  .place {
    background-image: url("/place-icon.png");
  }
  .title {
    background-image: url("/title-icon.png");
  }
  @media only screen and (min-width: 700px) {
    padding: 2rem;
  }
`;

export const Time = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  label {
    margin: 0.5rem 0;
  }
  &:before {
    content: "";
    width: 100%;
    background-color: var(--text-secondary);
    height: 1px;
  }
  input[type="time"] {
    background-color: var(--bg-lightblue);
    border: 1px solid var(--text-secondary);
    width: 50%;
    padding: 12px 0 12px 35px;
    margin: 10px 3px;
    font-family: "Spartan", sans-serif;
    box-sizing: border-box;
  }
`;
