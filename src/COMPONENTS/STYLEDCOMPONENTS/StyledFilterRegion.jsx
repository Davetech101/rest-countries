import styled from "styled-components";

const StyledFilterRegion = styled.div`
  width: 90vw;
  max-width: 35rem;
  margin: 0 auto;
  font-size: 1.5rem;
  position:relative;

  .filter-btn {
    background-color: var(--white);
    box-shadow: var(--default-box-shadow);
    width: 60%;
    padding: 1rem;
    border: none;
    display: flex;
    border-radius: 4px;
    justify-content: space-around;
    align-items: center;
    font-size: 1.7rem;
    color: var(--very-dark-blue-lm);
  }

  ul {
    background-color: var(--white);
    width: 60%;
    margin-top: 1rem;
    box-shadow: var(--default-box-shadow);
    border-radius: 4px;
    position:absolute;
    left:0;
  }

  li {
    list-style: none;
  }

  .continent-btn {
    width: 100%;
    height: 100%;
    text-align: left;
    padding: 1rem;
    font-size: 1.7rem;
    border-bottom: none;
    background-color: transparent;
    color: var(--very-dark-blue-lm);
  }

  @media only screen and (min-width:600px){
    margin:3rem;
  }

  @media only screen and (min-width:900px){
    max-width: 35rem;
    margin:0 -7rem 0 0;
  }

  @media only screen and (min-width:1300px){
    margin:0 -3rem 0 0;
  }
`;
export default StyledFilterRegion;
