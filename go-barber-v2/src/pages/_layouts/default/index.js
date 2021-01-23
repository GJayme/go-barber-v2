import { Wrapper } from "./styles";
import PropTypes from "prop-types";

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.prototype = {
  children: PropTypes.element.isRequired,
};
