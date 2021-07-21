import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.small};
    text-align: center;
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
