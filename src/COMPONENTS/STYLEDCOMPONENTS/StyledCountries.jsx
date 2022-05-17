import styled from "styled-components";

const StyledCountries = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top:20rem;
  margin-bottom:10rem;
  animation:show 1s;

  li {
    background-color: var(--white);
    list-style: none;
    width: 70%;
    max-width: 40rem;
    margin-bottom: 2rem;
    box-shadow: var(--default-box-shadow);
    border-radius: 4px;
    color: var(--very-dark-blue-lm);
    transition: all .4s;
  }

  li:hover{
    transform:scale(1.1);
    outline:1px solid;
    outline-offset:1rem;
  }

  img {
    width: 100%;
  }

  .info {
    padding: 2rem 3rem;
  }

  h3 {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  .info div {
    font-size: 1.65rem;
  }

  span {
    font-weight:bold;
    font-weight: 100;
  }

  p{
    font-size:2rem;
    text-align:center;
    color: var(--very-dark-blue-lm)
  }

  @media only screen and (min-width:700px){
    flex-direction:row;
    flex-wrap:wrap;
    gap:2rem;

    li{
      width: 25rem;
      height:35rem;
      margin-bottom:0;
    }

    img {
      width: 100%;
      height:47%;
    }

    h3 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .info{
      padding:2rem 1rem;
    }
  }

  @media only screen and (min-width:900px){
    gap:5rem;
  }

  @keyframes show {
    0%{
      transform: translate(-50rem);
    }
    
    100%{
      transform: translate(0);
    }
  }
`;

export default StyledCountries;
