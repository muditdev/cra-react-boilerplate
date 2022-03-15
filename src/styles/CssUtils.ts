import { createGlobalStyle } from 'styled-components';
import { myTheme } from './theme';
export const CssUtils = createGlobalStyle<{ theme: typeof myTheme }>`
  .mb-2r{
    margin-bottom: 2rem;
  }
  .btn-nostyle{
    border: none;
  }
  .font-weight-bold{
    font-weight: 700;
  }
  .fs-sm{
    font-size: .875rem;
  }
  .fs-1rem{
    font-size: 1rem;
  }
  .g-1{
    gap: 0.5rem;
  }
  .g-2{
    gap: 1rem;
  }
  .fw-600{
    font-weight: 600;
  }
  .fw-700{
    font-weight: 700;
  }
  .fw-400{
    font-weight: 400;
  }
  .fw-500{
    font-weight: 500;
  }
  .fs-base{
    font-size: 1rem;
  }
  .fs-12{
    font-size: 0.75rem;
  }
  .fs-14{
    font-size: .875rem;
  }
  .fs-20{
    font-size: 1.25rem;
  }
  .fs-24{
    font-size: 1.5rem;
  }
  .fs-32{
    font-size: 2rem;
  }
  .flip-x{
    transform: scaleX(-1);
  }
  .color-green{
    color: ${myTheme.statusColors.green.color};
  }
  .flex-1{
    flex: 1;
  }
  .link-bordered{
    border-bottom: 1px dashed currentColor ;
  }
  .color-green{
    color: ${myTheme.statusColors.green.color};
  }
`;
