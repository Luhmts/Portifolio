import styled from "styled-components";

export const Main = styled.main`

height: 100vh;
display: flex;
@media (max-width: 500px){
    flex-direction: column;
}
`;

export const Container = styled.section`
background-color:#A594F9;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        width: 60%;
    }
`;