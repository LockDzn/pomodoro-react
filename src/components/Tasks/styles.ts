import styled from 'styled-components'

type CradProps = {
  checked: boolean
}

type ModalOverlayProps = {
  activated: boolean
}

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  max-width: 30rem;
  header {
    width: 100%;
    padding: 1rem 0;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    h2 {
      font-size: 1rem;
    }
  }
`

export const Card = styled.label<CradProps>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1rem;
  background: #fff;
  color: #000;
  border-radius: 0.4rem;
  margin-bottom: 0.6rem;
  cursor: pointer;
  input[type='checkbox'] {
    margin-right: 1rem;
    cursor: pointer;
  }
  span {
    margin-left: auto;
    cursor: pointer;
    color: #e83f5b;
    &:hover {
      background: #bdbdbd;
    }
  }
  ${({ checked }) =>
    checked &&
    `
    opacity: 0.1;
    &:hover {
      opacity: 0.5;
    }
  `}
`

export const AddTask = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 1rem 0;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgb(255 255 255 / 10%);
  border-radius: 0.4rem;
  cursor: pointer;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
`

export const ModalOverlay = styled.div<ModalOverlayProps>`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  opacity: ${({ activated }) => (activated ? 1 : 0)};
  visibility: ${({ activated }) => (activated ? 'visible' : 'hidden')};
  .modal {
    background: #000;
    padding: 2.4rem;
    width: 90%;
    max-width: 500px;
    transition: top 0.5s;
    .buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 48%;
        height: 50px;
        color: #fff;
        background: #8257e6;
        padding: 0;
        border: none;
        border-radius: 0.25rem;
        cursor: pointer;
      }
      .cancel {
        width: 48%;
        color: #e83f5b;
        border: 2px #e83f5b solid;
        border-radius: 00.25rem;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.6;
        cursor: pointer;
      }
    }
    .input-group {
      margin-top: 0.8rem;
      input {
        border: none;
        border-radius: 0.2rem;
        padding: 0.8rem;
        width: 100%;
        background: #464646;
        color: #f0f2f5;
      }
      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;
      }
    }
  }
`
