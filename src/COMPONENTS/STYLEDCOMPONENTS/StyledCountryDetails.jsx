import styled from "styled-components";

const StyledCountryDetails = styled.div`
  width: 100vw;
  padding: 4rem 10rem;
  color: var(--very-dark-blue-lm);
  animation: showDetails 1s;

  .back {
    padding: 1rem 2.5rem;
    background-color: var(--white);
    box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.13);
    margin-bottom: 3rem;
    color: inherit;
  }

  i {
    margin-right: 1rem;
  }

  .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    min-height: 60vh;
  }

  .parts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
    width: 100%;
  }

  img {
    max-width: 50%;
    height: 40rem;
    width: 100%;
  }

  .details {
    display: flex;
    gap: 2rem;
  }

  h2 {
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  .parts div {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }

  .parts span {
    font-weight: bold;
    letter-spacing: 1px;
  }

  .links {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    width: 70%;
    gap: 0.5rem;
    margin-left: 0.7rem;
  }

  a {
    padding: 0.5rem 1rem;
    background-color: var(--white);
    box-shadow: 0rem 0rem 0.5rem rgba(0, 0, 0, 0.13);
    font-size: 1.1rem;
    font-weight: 100;
  }

  @media only screen and (max-width: 1230px) {
    h2 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
    }

    .parts {
      gap: 1rem;
    }

    .links {
      width: 100%;
    }
  }

  @media only screen and (max-width: 1000px) {
    .cont {
      flex-direction: column;
    }

    img {
      width: 100%;
        max-width: unset;
        width: 100%;
      height: 30rem;
    }
  }

  @media only screen and (max-width: 700px) {
    padding: 4rem;

    .details {
      flex-direction: column;
    }

    .cont {
      display: block;
    }

    img {
      max-width: unset;
      width: 100%;
      height:unset;
    }
  }

  @keyframes showDetails{
    0%{
      transform: translate(50rem);
    }
    
    100%{
      transform: translate(0);
    }
  }
`;

export default StyledCountryDetails;
