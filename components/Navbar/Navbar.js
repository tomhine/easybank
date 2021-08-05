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

  return (
    <nav className={styles.navbar}>
      <Logo />
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
