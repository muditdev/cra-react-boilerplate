import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled(Spinner)<{ height?: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${(props) => (props.height ? `${props.height}px` : '50vh')};
  .spinner-border {
    font-size: 0.75rem;
    width: 60px;
    height: 60px;
  }
`;

function Loader({ height }: any) {
  return (
    <Wrapper height={height}>
      <Spinner animation="border" />
    </Wrapper>
  );
}

export default Loader;
