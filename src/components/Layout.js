import styled from "styled-components";
import Header from "./Header";

const Content = styled.main`
  max-width: 930px;
  width: 100%;
  margin: 45px auto 0;
  display:flex;
  justify-content: center;
  padding: 0 3%;
`;

function Layout({ children }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;