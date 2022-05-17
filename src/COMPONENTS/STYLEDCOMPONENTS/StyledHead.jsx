import styled from "styled-components";

const StyledHead = styled.div`
  position: fixed;
  top:0;
  left: 0;
  width: 100vw;
  background-color: var(--very-light-gray-lm);
  box-shadow: var(--default-box-shadow);
  padding:7rem 0 1rem 0;
  z-index:5;

  @media only screen and (min-width:900px){
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
`;
export default StyledHead;
