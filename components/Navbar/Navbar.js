import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';
import { CloseIcon, Logo, MenuIcon } from '../Icons/Icons';
import styles from './Navbar.module.css';
import NavItem from '../NavItem/NavItem';
import { InviteButton } from '../Elements/Elements';

const Navbar = () => {
  const windowWidth = useWindowSize().width;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mobileNavToggleHandler = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const logoWidth =
    windowWidth < 768 ? '139' : windowWidth < 1024 ? '174' : '209';
  const logoHeight =
    windowWidth < 768 ? '20' : windowWidth < 1024 ? '25' : '30';

  return (
    <nav className={styles.navbar}>
      <Logo width={logoWidth} height={logoHeight} />
      {windowWidth < 768 ? (
        mobileNavOpen ? (
          <CloseIcon onClick={mobileNavToggleHandler} />
        ) : (
          <MenuIcon onClick={mobileNavToggleHandler} />
        )
      ) : (
        <>
          <ul className={styles.navLinkContainer}>
            <NavItem title="Home" />
            <NavItem title="About" />
            <NavItem title="Contact" />
            <NavItem title="Blog" />
            <NavItem title="Careers" />
          </ul>
          <InviteButton />
        </>
      )}
    </nav>
  );
};

export default Navbar;
