import { Container } from 'react-bootstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1rem;
  min-height: 70vh;
  .home-banner {
    min-height: 550px;
    background: #f5f5f5;
    border-radius: 20px;
    display: flex;
    align-items: center;

    .banner-slide {
      position: relative;
    }

    .display-center {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      align-items: flex-start;
    }

    .text-sub-title {
      color: #232f3e;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      opacity: 0.6;
      margin-bottom: 20px;
    }

    .text-title {
      font-weight: bold;
      font-size: 52px;
      line-height: 62px;
      color: #000000;
      margin-bottom: 40px;
    }

    .banner-image {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
      position: relative;
    }

    .overlay {
      background: linear-gradient(
        153.66deg,
        rgba(255, 255, 255, 0.078) 27.36%,
        rgba(255, 255, 255, 0.78) 88.54%
      );
      width: 500px;
      height: 500px;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .shop-now {
      svg {
        margin-left: 0.5rem;
        width: 1rem;
        height: 1.25rem;
      }
      path {
        stroke: white;
        stroke-width: 2.5;
      }
    }
  }

  @media (max-width: 767px) {
    .home-banner {
      .text-title {
        font-size: 25px;
        line-height: 32px;
        margin-bottom: 25px;
      }

      .overlay {
        width: 300px;
        height: 300px;
      }
    }
  }
`;

export const Content = styled(Container)`
  max-width: 970px;
`;

export const Section = styled.div`
  position: relative;
  margin: 80px 0 100px;

  h3 {
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 20px;

    svg {
      margin-left: 10px;
    }
  }

  .carousel-button-group {
    position: absolute;
    top: 5px;
    right: 20px;

    .btn-slide {
      background: #ffffff;
      border: none;
    }
  }

  @media (max-width: 767px) {
    margin: 20px 0 40px;

    h3 {
      font-size: 24px;
      line-height: 34px;
    }
    .carousel-button-group {
      right: 0px;
      top: 3px;
    }
  }
`;
