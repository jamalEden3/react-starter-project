import styled from "styled-components";

function Header() {
    return (
      <Wrapper>
        <h1>header</h1>
        <h2>header2</h2>
        <h3>header3</h3>
        <h4>header4</h4>
      </Wrapper>
    );
  }

const Wrapper = styled.section`
h1{ color: var(--clr-accent-100);
  font-size: var(--fs-700)}
 
`
  export default Header;