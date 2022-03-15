import styled, { css } from 'styled-components';
import { ReactComponent as Delete } from 'assets/icons/trash.svg';
import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as CheckMark } from 'assets/icons/checkmark.svg';
import { Button } from 'react-bootstrap';

const StyledBtn = styled.button<{ background?: string }>`
  background-color: white;
  border: solid 1px #c7c7c7;
  border-radius: 0.5rem;
  width: 40px;
  height: 40px;
  ${({ background }) =>
    background &&
    css`
      background-color: ${background};
      border: none !important;
    `}
  &.withText {
    width: auto;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    padding: 0.65rem;
  }
`;

export const IconButton = ({ name, children, ...rest }: any) => (
  <StyledBtn {...rest}>
    {name === 'delete' && <Delete />}
    {name === 'edit' && <Edit />}
    {name === 'check' && <CheckMark stroke="#32B155" />}
    {children}
  </StyledBtn>
);

export const StyledButton = styled(Button)<{
  height: number;
  padding?: string;
  shadow?: 0 | 1;
  background?: string;
}>`
  /* default */
  border-radius: 0.5rem;
  padding: ${(props) => props.padding || '0.75rem 1.5rem'};
  ${({ shadow }) =>
    shadow &&
    css`
      box-shadow: 0px 4px 36px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease-in-out;
      &:hover,
      &:focus,
      &:active {
        box-shadow: 0px 8px 36px rgba(0, 0, 0, 0.16);
        transform: translateY(-2px);
        /* rotate(2deg); */
      }
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `};

  border-radius: 0.5rem;
  svg {
    margin-right: 4px;
  }
  &.btn-outline-primary {
    border: 1px solid #c7c7c7;
    color: ${(props) => props.theme.colors.black};
    font-weight: 400;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.1) -2px 2px 6px 0px;
      transform: translateY(-2px);
      /* rotate(2deg); */
    }
  }
`;

export const TransparentButton = styled(Button).attrs(() => ({
  variant: 'transparent',
}))`
  border: none;
  color: #283eff;
  font-weight: 500;
  margin-bottom: 10px;
`;
