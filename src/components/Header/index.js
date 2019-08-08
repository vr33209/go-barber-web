import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Notifications from "~/components/Notifications";

import LogoHeader from "~/assests/header.svg";

import { Container, Content, Profile } from "./styles";

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={LogoHeader} alt="LogoHeader" />
          <Link to="/dashboard">HOME</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Joao Victor</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar.url ||
                "https://api.adorable.io/avatars/50/abott@adorable.png"
              }
              alt="avatar"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
