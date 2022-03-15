import { createGlobalStyle } from 'styled-components';
import { myTheme } from './theme';
export const MyGlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${myTheme.font.primary};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  .btn-check:focus+.btn, .btn:focus{
    box-shadow: none;
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  .form-check-input:checked{
    background-color:#292D32;
  }
  .btn.btn-link{
    text-decoration: none;
    /* todo : refactor color */
    color: #283EFF;
  }
  button.btn:not(.btn-link, .btn-transparent) {
    transition: all 0.2s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) -2px 2px 6px 0px;
      transform: translateY(-2px);
      /* rotate(2deg); */
    }
  }
  .heading-sm{
    color: #0D0D0D;
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.5;
  }
  .modal-open  .App{ 
    filter: blur(2.5px);
  }
  .delete-listing-modal{
    .modal-dialog{
      min-width: 500px;
    }
    .modal-body{
      padding: 2rem;
    }
    .promptTitle{
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.75rem;
    }
    .promptMsg{
      text-align: left!important;
    }
  }
  .pointer{
    cursor: pointer;
  }
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #CACACA;
  }

  .btn.btn-secondary{
    background-color: #E7E7E7;
    color: #000000;
    border: none;
  }
  .stripeEleClass{
    background-color: red;
  }
`;
