import styled from 'styled-components'

type ButtonProps = {
  initiated: boolean
  tab?: number
}

type CardButtonProps = {
  selected?: boolean
}

type ContentProps = {
  tab: number
}

export const Content = styled.div<ContentProps>`
  height: 100vh;
  transition: background-color 0.5s ease-in-out 0s;
  ${props => {
    if (props.tab == 1) {
      return `
        background: #00474a;
      `
    } else if (props.tab == 2) {
      return `
        background: #003255;
      `
    }
  }}
`

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  color: #8257e6;
`

export const Container = styled.main`
  padding: 0 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.4rem;
  padding: 1rem 0.5rem;
  .header {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .counter {
    color: #fff;
    font-size: 5rem;
    font-weight: bold;
  }
  @media screen and (min-width: 600px) {
    max-width: 25rem;
    padding: 2rem 5rem;
  }
`

export const CardButton = styled.button<CardButtonProps>`
  padding: 0.5rem;
  background: ${props => (props.selected ? 'rgb(255 255 255 / 10%)' : 'none')};
  border-radius: 0.4rem;
  border: none;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  ${({ selected }) =>
    selected &&
    `
    font-weight: bold;
    cursor: auto;
  `}
  &:focus {
    outline: none;
  }
`

export const Button = styled.button<ButtonProps>`
  margin-top: 1rem;
  padding: 0.8rem 4rem;
  border: none;
  border-radius: 0.4rem;
  background: #fff;
  box-shadow: ${props =>
    props.initiated ? 'none' : 'rgb(189, 189, 189) 0px 6px 0px'};
  font-size: 1.6rem;
  font-weight: bold;
  width: 13rem;

  &:focus {
    outline: none;
  }

  ${({ initiated }) =>
    initiated &&
    `
    transform: translateY(0.37rem);
  `}

  ${({ tab }) =>
    tab &&
    `
    color: ${tab == 1 ? '#00474a' : '#003255'};
  `}
`
