import styled, { keyframes } from 'styled-components'

const rollout = keyframes`    
  0% {
    transform: translateZ(1);
    opacity: 1;
  }
  100% {
    transform: translateZ(60rem);
    opacity: 0;
  }

`

export const Container = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 3;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  /* gap: 3.2rem; */
  padding: 2.4rem clamp(3rem, 0.7273rem + 7.1023vw, 8rem);
  white-space: nowrap;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  //TODO: ajustar largura do input para tela 1024
  > a {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALL_REGULAR}
  }
`
export const Text = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media ${({ theme }) => theme.DEVICES.laptop} {
    display: grid;
    justify-items: end;
    gap: 0;
  }
`
export const Logo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  h3 {
    ${({ theme }) => theme.FONTS.ROBOTO.BIG_BOLD}
    line-height: 100%;
  }
  p {
    ${({ theme }) => theme.FONTS.ROBOTO.SMALLEST_REGULAR}
    line-height: 100%;
    color: ${({ theme }) => theme.COLORS.CAKE_100};
    display: ${({ isAdmin }) => (isAdmin ? 'flex' : 'none')};
  }
  &:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.DEVICES.laptop} {
    align-items: ${({ isAdmin }) => (isAdmin ? 'flex-start' : 'center')};
  }
`
export const Links = styled.div`
  margin-top: 3.6rem;
  display: grid;
  align-content: center;
  align-items: flex-start;
  gap: 1rem;
  > a {
    width: 100%;
    ${({ theme }) => theme.FONTS.POPPINS.LIGHT_300}
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
  }
`

export const OptionsIn = styled.div`
  margin-top: 3.6rem;
  position: absolute;
  top: 100%;
  width: 82.5vw;

  display: ${({ isOpen }) => (isOpen ? 'grid' : 'none')};
  align-items: flex-start;
  gap: 1rem;

  animation: 0.5s ${rollout} ease-out reverse;

  @media ${({ theme }) => theme.DEVICES.laptop} {
    animation: none;
  }
`

export const OptionsOut = styled.div`
  margin-top: 3.6rem;
  width: 82.5vw;

  position: absolute;
  top: 100%;

  display: grid;
  align-items: flex-start;
  gap: 1rem;

  pointer-events: none;

  animation: 0.5s ${rollout} ease-out forwards;

  @media ${({ theme }) => theme.DEVICES.laptop} {
    animation: none;
  }
`

export const ButtomContainer = styled.div`
  min-width: 3.2rem;
  position: relative;
  > svg {
    flex-shrink: 0;
  }
  &:hover {
    cursor: pointer;
  }
`

export const CircleIcon = styled.div`
  position: absolute;
  right: -10%;
  top: -10%;

  width: fit-content;
  height: fit-content;
  min-width: 2rem;
  min-height: 2rem;
  /* transform: translateY(5%), translateX(5%); */
  padding: 10%;

  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
  z-index: 1;
  > span {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    line-height: 90%;
  }
`
