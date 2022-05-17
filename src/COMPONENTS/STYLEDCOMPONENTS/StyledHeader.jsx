import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--white);
  box-shadow: var(--default-box-shadow);
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding: 2rem 3rem;
  color: var(--very-dark-blue-lm);
  position: sticky;
  top: 0;
  left: 0;
  z-index:8;


  h1 {
    font-size: 1.5rem;
    font-weight: 700;
  }

  button {
    background-color: transparent;
    color:inherit;
    padding:1rem;
    font-size: 1.5rem;
  }

  @media only screen and (min-width:500px){
    h1{font-size:2rem;}
  }

  @media only screen and (min-width:900px){
    h1{font-size:3rem;}
  }
`;

export default StyledHeader;
