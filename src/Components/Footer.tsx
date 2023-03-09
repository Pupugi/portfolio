import styled from "styled-components";

const Myfooter = styled.footer`
  position: fixed;
  text-align: center;
  opacity: 0.5;
  width: 100%;
  bottom: 20px;
`;

function Footer() {
  return <Myfooter>&copy; Hwang</Myfooter>;
}
export default Footer;
