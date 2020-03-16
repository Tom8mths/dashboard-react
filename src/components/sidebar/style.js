import styled from "styled-components";
import "../../assets/variables/Variables.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Sidebar = styled.div`
  position: fixed;
  background-color: var(--bg-primary);
  transition: width 200ms ease-in-out;
  z-index: -1;
  font-family: "Spartan", sans-serif;

  .link-text {
    opacity: 0;
    margin-left: 1rem;
  }

  //   Small screens
  @media only screen and (max-width: 600px) {
    bottom: 0;
    width: 100vw;
    height: 5rem;

    .link-text {
      display: none;
    }
  }

  // Large Screens
  @media only screen and (min-width: 600px) {
    top: 0;
    width: 5rem;
    height: 100vh;

    &:hover {
      width: 16rem;
    }

    &:hover .link-text {
      display: inline;
      opacity: 1;
      transition: opacity 1s ease;
    }
  }
`;

export const Side = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  //   Small screens
  @media only screen and (max-width: 600px) {
    flex-direction: row;
  }
`;

export const SideItem = styled.li`
  width: 100%;
  &:last-child {
    margin-top: auto;
  }
`;

export const SideLink = styled.a`
  display: flex;
  align-items: center;
  height: 5rem;
  color: var(--text-primary);
  text-decoration: none;
  filter: grayscale(200%) opacity(0.5);
  transition: var(--transition-speed);

  &:hover {
    filter: grayscale(0%) opacity(1);
    background: var(--bg-secondary);
    color: var(--text-secondary);
  }

  //   Small screens
  @media only screen and (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  min-width: 2rem;
  margin: 0 1.5rem;
  height: auto;
  color: #fff;
  transition: var(--transition-speed);
`;
