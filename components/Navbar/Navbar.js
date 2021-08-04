import useWindowSize from "../../hooks/useWindowSize";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import styles from "./Navbar.module.css";
import MenuIcon from "../../public/images/icon-hamburger.svg";
import NavItem from "../NavItem/NavItem";
import { InviteButton } from "../Elements/Elements";

const Navbar = () => {
  const windowWidth = useWindowSize().width;

  return (
    <nav className={styles.navbar}>
      <Image src={Logo} alt="Main logo" />
      {windowWidth < 768 ? (
        <Image src={MenuIcon} alt="menu icon" className={styles.menuIcon} />
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
