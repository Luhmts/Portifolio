import Header from '../../components/Header'
import * as S from "./styled"


export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Container>
        <S.BoxInicio>
      <div>
        <h2>Olá meu nome é Luíza Matos e sou dev Front-end</h2>
        <p>Não é a linguagem de programação que define o programador, mas sim sua lógica.</p>
      </div>
      </S.BoxInicio>
      </S.Container>
    </S.Main>
  )
}
