import styled,{createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}
`;

export const Header = styled.header`
background-color:#5e548e;
height: 100vh;
width: 15vw;
padding: 12px;
display: flex;
align-items: center;
flex-direction: column;
align-items: center;
   @media(max-width: 700px) {
      width: 20vw;
   }
    @media(max-width: 451px) {
      width: 100%;
      height: 30vh;
   }
`;
export const BoxLogo = styled.div`
width: 99%;
height: 35vh;
color: white;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
img{
    width: 11vw;
    border-radius: 50%;
}
 @media(max-width: 500px) {
      width: 80vw;
      flex-direction: row;
      justify-content: space-between;
   }
`;
export const Title = styled.h2`
   width: 99%;
   text-align: center;
   color: white;
`;
export const Text = styled.p`
width: 90%;
text-align: center;
color: white;
@media (max-width: 497px) {
}
`;

export const BoxMenu = styled.nav`
height: 36vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
ul{
    width: 99%;
}
`;
export const Lista = styled.li`
 height: 11vh;
 display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px white;
border-top:${props => props.linha};
a{
    color: white;
}
 @media(max-width: 497px) {
      height: 8vh;
   }
`

export const BoxIcon = styled.div`
height: 30vh;
width: 100%;
 display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
 .borda{
        border-radius: 21px;
    }
img{
    background-color: white;
    border-radius: 5px;
   
}
@media (max-width: 500px) {
    display: none;
}
`