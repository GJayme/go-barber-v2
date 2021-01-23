import { Wrapper, Content } from "./styles";
import PropTypes from "prop-types";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.prototype = {
  children: PropTypes.element.isRequired,
};
