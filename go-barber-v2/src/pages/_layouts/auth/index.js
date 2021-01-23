import { Wrapper, Content } from "./styles";
import PropTypes from "prop-types";

import logo from "../../../assets/logo.svg";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="goBarber" />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropTypes.element.isRequired,
};
