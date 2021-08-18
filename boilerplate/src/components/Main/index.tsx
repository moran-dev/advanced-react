import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um Átomo e React Avançado escrito ao lado."
      />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        TypeScript, ReactJS, NextJS, Styled Components
      </S.Description>
      <S.Illustration
        src="/img/illustration.svg"
        alt="Desenvolvedor de Frente para a tela com um código"
      />
    </S.Wrapper>
  )
}

export default Main
