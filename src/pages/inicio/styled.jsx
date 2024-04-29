import styled from "styled-components";



export const Main = styled.main`
height: 100vh;
display: flex;
background-color: #A594F9;
@media (max-width: 500px){
    flex-direction: column;
}
`;

export const Container = styled.section`
 display: flex;
 justify-content: center;
 align-items: center;
`;

export const BoxInicio = styled.div`
  h1 {
    font-size: clamp(0.5rem, 10vw, 3rem);
    width: 40vw;
    color: white;
  }
  p {
    font-size: 2rem;
    width: 45vw;
    color: white;
  }
  img {
    width: 20vw;
    border-radius: 20px;
  }
`;
