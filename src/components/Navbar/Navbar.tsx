import { useLocation, useNavigate } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import * as S from "./Navbar.styles";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [navbarColor, setNavbarColor] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const { setKey } = useAuthContext();
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const changeColor = () => {
    if (scrollY > 10) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    addEventListener("scroll", changeColor);

    return () => removeEventListener("scroll", changeColor);
  }, []);

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (
        showSideBar &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setShowSideBar(!showSideBar);
      }
    };

    addEventListener("mousedown", checkIfClickedOutside);

    return () => removeEventListener("mousedown", checkIfClickedOutside);
  }, [showSideBar]);

  useEffect(() => {
    setShowSideBar(false);
  }, [location]);

  const handleLogout = () => {
    setKey("");
  };

  const handleSelectTeam = () => {
    navigate("/");
  };

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <S.Nav navbarColor={navbarColor} ref={ref}>
      <S.Sidebar showSideBar={showSideBar}>
        <S.SidebarButton onClick={handleSelectTeam}>
          Selecionar outro time
        </S.SidebarButton>
        <S.SidebarButton onClick={handleLogout}>Sair</S.SidebarButton>
        <S.CloseButton onClick={handleShowSideBar} />
      </S.Sidebar>
      <S.Menu onClick={handleShowSideBar} />
      <Logo />
      <S.LinksContainer>
        <S.NavButton
          children="Selecionar outro time"
          onClick={handleSelectTeam}
        />
        <Button children="Sair" onClick={handleLogout} />
      </S.LinksContainer>
    </S.Nav>
  );
};

export default Navbar;
