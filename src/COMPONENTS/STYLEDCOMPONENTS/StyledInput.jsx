import styled from "styled-components";

const StyledInput = styled.div`
  margin: 3rem auto;
  position: relative;
  width: 90vw;
  max-width: 35rem;

  input {
    width: 100%;
    margin: 0 auto;
    display: block;
    box-shadow: var(--default-box-shadow);
    padding: 1.5rem 5rem;
    border-radius: 4px;
    background-color: var(--white);
    color: var(--very-dark-blue-lm);
  }

  input::placeholder {
    color: var(--dark-gray-lm);
  }

  input:focus {
    outline: none;
    border-bottom: 1px solid;
  }

  i {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    color: var(--dark-gray-lm);
  }

  @media only screen and (min-width:600px){
    margin:3rem;
  }

  @media only screen and (min-width:1300px){
    margin-left:10rem;
  }
`;

export default StyledInput;
