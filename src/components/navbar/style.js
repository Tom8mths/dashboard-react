import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../assets/variables/Variables.scss";

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  max-height: 70px;
  justify-content: flex-end;
  align-items: center;
  z-index: 3;
  position: relative;
  background-color: #fff;

  -webkit-box-shadow: 0px 7px 18px -2px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 7px 18px -2px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 7px 18px -2px rgba(0, 0, 0, 0.09);

  h1 {
    margin-right: 2rem;
    margin-left: 2rem;
    font-family: "Alfa Slab One", cursive;
    white-space: nowrap;

    background: linear-gradient(
      to right,
      #de2465,
      #e0215c,
      #e22052,
      #e32148,
      #e3243d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (max-width: 950px) {
      display: none;
    }
  }
  h2 {
    margin-right: 2rem;
    margin-left: 2rem;
    font-family: "Alfa Slab One", cursive;
    white-space: nowrap;

    background: linear-gradient(
      to right,
      #de2465,
      #e0215c,
      #e22052,
      #e32148,
      #e3243d
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media only screen and (min-width: 950px) {
      display: none;
    }
  }

  .avatar {
    vertical-align: middle;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 1rem;
  }
  span {
    font-family: "Spartan", sans-serif;
    white-space: nowrap;
  }
`;

export const Search = styled.div`
  width: 100%;
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    widht: 100%;
  }
  input[type="search"] {
    background-color: var(--bg-lightblue);
    background-image: url("/search-icon.png");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border: 1px solid var(--text-secondary);
    width: 100%;
    padding: 12px 0 12px 40px;
    margin: 10px 3px;
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
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

export const RightNav = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    height: 100%;
    @media only screen and (max-width: 650px) {
      display: none;
    }
    li {
      margin: 0 1rem;
    }
  }
  .user {
    height: 100%;
    padding: 0.3rem;
    margin-right: 2rem;
    display: flex;
    cursor: pointer;
    align-items: center;
    &:hover {
      background-color: var(--text-secondary);
      transition: all 250ms ease;
    }
  }
  .toggle {
    display: none;
    @media only screen and (max-width: 650px) {
      display: block;
      height: 100%;
      padding: 1rem;
    }
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: var(--bg-secondary);
  height: auto;
  min-width: 1.2rem;
  cursor: pointer;
`;
