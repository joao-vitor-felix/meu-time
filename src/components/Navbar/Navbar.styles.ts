import styled, { css } from "styled-components";
import { Button } from "../Button/Button.styles";
import { AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";

type NavProps = {
  navbarColor: boolean;
};

type SidebarProps = {
  showSideBar: boolean;
};

export const Nav = styled.nav<NavProps>`
  width: 100%;
  height: 8rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ navbarColor, theme }) =>
    navbarColor ? theme.colors.secondary : "none"};
  transition: all 0.3s ease;
  position: sticky;
  top: 0;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
    gap: 1rem;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.3rem;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const NavButton = styled(Button)`
  font-size: 1.4rem;
  min-width: 17rem;
`;

export const Menu = styled(AiOutlineMenu)`
  color: white;
  font-size: 4rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
  }
`;

export const Sidebar = styled.div<SidebarProps>`
  height: 100vh;
  width: 20rem;
  visibility: hidden;
  z-index: 50;
  transform: translateX(-40rem);
  transition: all 0.3s ease;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem 2rem;
  ${({ showSideBar }) =>
    showSideBar &&
    css`
      visibility: visible;
      transform: translateX(0);
    `}
`;

export const CloseButton = styled(AiFillCloseCircle)`
  position: absolute;
  top: 1rem;
  right: 0.9rem;
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const SidebarButton = styled(Button)`
  width: 12rem;
`;
