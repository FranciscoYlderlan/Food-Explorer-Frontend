import styled from 'styled-components'

export const Container = styled.div`
  > span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  > span > h2 {
    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_150}/* margin-bottom: 2rem; */
  }

  > span > p {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    border-left: solid 1px ${({ theme }) => theme.COLORS.LIGHT_400};
    padding-left: 1rem;

    ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_100}
  }

  @media ${({ theme }) => theme.DEVICES.laptop} {
    > span > h2 {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_400}
    }
    > span > p {
      ${({ theme }) => theme.FONTS.POPPINS.MEDIUM_150}
    }
  }
`
