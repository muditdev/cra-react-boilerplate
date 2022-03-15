import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg};
  .container-f {
    margin-left: 250px;
    padding-top: 1.75rem;
    padding-left: 1rem;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.bg};
    position: relative;
  }
  &.withMinimized .container-f {
    margin-left: 76px;
  }
  &.no-sidebar{
    .container-f{
      margin-left: 0;
      padding-top: 0;
    }
  }

  .toggle {
    color: var(--text) !important;
    background-color: var(--transparent) !important;
    font-weight: 500;
    box-shadow: 0px 1px 0px #f5f5f5;
    &:hover,
    &:focus,
    &:active {
      box-shadow: none !important;
    }

    &:after {
      width: 7px;
      height: 7px;
      border: 0;
      border-right: 2px solid var(--text);
      border-bottom: 2px solid var(--text);
      transform: rotate(45deg);
      margin-left: 7px;
    }
    &.active {
      border-color: var(--text) !important;
    }
  }
  .bCrumsDd {
    > button {
      background-color: var(--transparent) !important;
      border: 0 !important;
      color: var(--textTinted1) !important;
      font-weight: 600;
      font-size: 0.815rem;
      padding: 0 0.5rem;
      position: relative;
      text-transform: uppercase;
      &:hover,
      &:focus,
      &:active,
      &.active {
        background-color: var(--transparent);
        color: var(--text) !important;
      }
      &:before {
        content: '';
        position: absolute;
        border-left: 1px solid var(--textTinted1);
        height: 100%;
        left: 0;
        height: 70%;
        transform: skewX(-21deg);
        bottom: 3px;
      }
    }
  }
  .dropdownMenu {
    min-width: 18rem;

    //   max-width: 250px;
  }

  .optionButton {
    > button {
      background-color: var(--transparent) !important;
      border: 0 !important;
      color: var(--textTinted1) !important;
      font-weight: 600;
      font-size: 0.815rem;
      padding: 0 0.5rem;
      position: relative;
      text-transform: uppercase;
      &:hover,
      &:focus,
      &:active,
      &.active {
        background-color: var(--transparent);
        color: var(--text) !important;
      }
      &:after {
        display: none;
      }
    }
    .dropdownMenu {
      min-width: 22rem !important;
      padding: 1rem 1.25rem;
    }

    @media (max-width: 767px) {
      button {
        padding: 0;
      }
      margin-bottom: 5px;

      width: 100%;
    }
  }
  .dropdownMenu {
    min-width: 15rem;
    padding: 1rem;
  }

  .dropdownSelect {
    select {
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0px 1px 0px #f5f5f5;
      height: calc(1.5em + 0.45rem + 2px) !important;
      padding: 0.275rem 0.75rem;
      padding-right: 1.3rem;
      font-size: 0.875rem;
      font-weight: 500;
      width: auto;
      color: var(--text);
      background-image: url('../../assets/icons/down.svg');
      background-repeat: no-repeat !important;
      background-position-x: 95% !important;
      background-position-y: 50% !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      -ms-appearance: none !important;
      -o-appearance: none !important;
      appearance: none !important;
      &::-ms-expand {
        display: none;
      }
    }
  }

  .dropdownSelect2 {
    select {
      border: 1px solid rgba(0, 0, 0, 0.1) !important;
      box-shadow: 0px 1px 0px #f5f5f5;
      height: calc(1.5em + 0.45rem + 2px) !important;
      padding: 0.275rem 0.75rem;
      padding-right: 1.8rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text);
      background-image: url('../../assets/icons/filter.svg');
      background-repeat: no-repeat !important;
      background-position-x: 95% !important;
      background-position-y: 50% !important;
      -webkit-appearance: none !important;
      -moz-appearance: none !important;
      -ms-appearance: none !important;
      -o-appearance: none !important;
      appearance: none !important;
      &::-ms-expand {
        display: none;
      }
    }
  }

  .search {
    position: relative;
    color: var(--textTinted);
    input {
      background-color: var(--searchBg);
      color: var(--text);
      border-radius: 4px;
      outline: 0;
      padding: 0.225rem 0.745rem;
      padding-left: 2.4rem;
      font-size: 0.875rem;
      border: 0;
      width: 100%;
    }
    svg {
      position: absolute;
      left: 10px;
      top: 4px;
      width: 20px;
      height: 20px;
      fill: var(--textTinted);
    }
  }

  .radioButton {
    span {
      display: inline-block;
      background: #f2f2f2;
      border-radius: 34px;
      padding: 6px 15px;
      font-size: 0.875rem;
      font-weight: 500;
      color: #797979;
      cursor: pointer;
    }
    input[type='radio'] {
      opacity: 0;
      position: fixed;
      width: 0;
      &:checked + span {
        //   background-color: var(--blueGray);
        box-shadow: 0 0 0 1px var(--text);
        color: var(--text);
      }
    }

    & ~ .radioButton {
      margin-left: 5px;
    }
  }

  .exportPDF {
    color: #212529;
    background-color: white;
    border-color: #e6e6e6;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3) !important;
    font-weight: 500;
    &:hover {
      background-color: var(--transparent) !important;
      color: var(--textTinted1) !important;
      border-color: #e6e6e6;
      box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.3) !important;
      font-weight: 500;
    }
    @media (max-width: 680px) {
      margin-bottom: 5px;
    }
  }

  .grayInput {
    background-color: var(--inputBg);
    border: 0;
  }

  .insideWin {
    padding: 1rem;
    background-color: var(--white);
    border-radius: 4px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 10px;
    z-index: 1;
    left: 3px;
  }

  .innerIcon {
    position: absolute;
    left: 5px;
    top: 7px;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
  }
`;

export default PageWrapper;
