import SiteHeader from 'components/header/Header';
import SiteFooter from 'components/footer/Footer';
import { Wrapper } from './home.styled';
import { Container } from 'react-bootstrap';

function HomePage() {
  return (
    <>
      <Wrapper>
        <SiteHeader />
        <Container>Home</Container>
      </Wrapper>
      <SiteFooter />
    </>
  );
}

export default HomePage;
