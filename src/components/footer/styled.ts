import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #000;
  padding: 2.4rem;
  .section-title {
    font-weight: 500;
    font-size: 1.25rem;
    color: #fff;
    margin-left: 1rem;
    margin-bottom: .5rem;
    @media (max-width: 680px) {
      font-size: 1rem;
    }
  }
  .nav-link {
    font-weight: 400;
    font-size: 1rem;
    color: #D9DBE1;
    @media (max-width: 680px) {
      font-size: 0.8rem;
    }
  };
  .copyright {
    font-weight: 400;
    font-size: 0.8rem;
    color: #fff;
    margin-left: 0.8rem;
    @media (max-width: 680px) {
      font-size: 0.6rem;
    }
  }
`;

export const SocialIconButton = styled.div`
  background-color: rgba(255,255,255,0.1);
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  margin-left: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
