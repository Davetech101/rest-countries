import styled from "styled-components";

const StyledLoading = styled.div`
  border: .5rem solid var(--dark-gray-lm);  
  border-top: .5rem solid black;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: spin 2s linear infinite;
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%, -50%);

  @keyframes spin {
    0% {
      transform:translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform:translate(-50%, -50%) rotate(360deg);
    }
  }
`;

export default StyledLoading;
