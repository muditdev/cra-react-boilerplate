import { Container, Navbar, Image, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FooterWrapper, SocialIconButton } from './styled';

const socialLinks = [
  {
    name: 'Instagram',
    path: '/',
    icon: '/images/insta.png',
  },
  {
    name: 'Twitter',
    path: '/',
    icon: '/images/twitter.png',
  },
  {
    name: 'Youtube',
    path: '/',
    icon: '/images/youtube.png',
  },
];

const ACCOUNT = [
  {
    name: 'Link1',
    path: '/',
  },
  {
    name: 'Link2',
    path: '/',
  },
  {
    name: 'Link3',
    path: '/',
  },
];

const SUPPORT = [
  {
    name: 'Link1',
    path: '/',
  },
  {
    name: 'Link2',
    path: '/',
  },
  {
    name: 'Link3',
    path: '/',
  },
];

const SocialLinks = () => {
  return (
    <div className="d-flex">
      {socialLinks.map(({ name, icon }) => (
        <SocialIconButton key={name}>
          <Image src={icon} alt={name} width={18} />
        </SocialIconButton>
      ))}
    </div>
  );
};

function SiteFooter() {
  return (
    <FooterWrapper>
      <Container className="d-flex justify-content-around">
        <div>
          <Navbar.Brand>
            <Link to="/">
              <Image src="/logo.png" alt="" width={100} />
            </Link>
          </Navbar.Brand>
          <p className="copyright">Copyright © 2022</p>
          <p className="copyright">All rights reserved</p>
          <SocialLinks />
        </div>
        <div>
          <Nav>
            <div className="section-title">Account</div>
          </Nav>
          {ACCOUNT.map(({ name, path }) => (
            <Link to={path} key={name}>
              <a role="button" className="nav-link" tabIndex={0}>
                {name}
              </a>
            </Link>
          ))}
        </div>
        <div>
          <div className="section-title">Support</div>
          {SUPPORT.map(({ name, path }) => (
            <Link to={path} key={name}>
              <a role="button" className="nav-link" tabIndex={0}>
                {name}
              </a>
            </Link>
          ))}
        </div>
      </Container>
    </FooterWrapper>
  );
}

export default SiteFooter;
