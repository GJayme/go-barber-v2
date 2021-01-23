import { Link } from "react-router-dom";

import Notifications from "../Notifications";

import logo from "../../assets/logo.svg";
import { Container, Content, Profile } from "./styles";

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>Gabriel Jayme</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://avatars.dicebear.com/4.5/api/bottts/aaaaaaaaaaaaaaaaaasd.svg"
              alt=""
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
