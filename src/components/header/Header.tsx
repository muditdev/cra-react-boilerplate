import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HeaderWrapper } from './styled';

const NAV_ITEMS = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'find work',
    path: '/',
  },
];

function SiteHeader() {
  return (
    <HeaderWrapper>
      <Navbar expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand>
            <Link to="/">
              <Image src="/logo.png" alt="" width={100} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="w-100">
              <div className="d-flex justify-content-between w-100">
                <div className="d-flex flex-1 justify-content-center align-items-center header-link">
                  {NAV_ITEMS.map(({ name, path }) => (
                    <Link to={path} key={name}>
                      <a role="button" className="nav-link" tabIndex={0}>
                        {name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderWrapper>
  );
}

export default SiteHeader;
